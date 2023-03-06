---
title: Build and deploy a model with Workbench
updated: Last updateed May 4, 2022
author: Written by EDP Team
description: Google Cloud's Vertex AI Workbench & Training - to build end-to-end ML workflows. You'll learn how to go from raw data to deployed model,and will leave this workshop ready to develop and productionize your own ML projects with Vertex AI.
tag: machine-learing-training
layout: docs
navigation: false
---

::docCard
---
summary: true
title: About this lab
updated: May 4, 2022
writtenBy: EDP Team  
---
::

::docCard{id="1"}
### [1. Overview]{.text-center .text-gray-500 .text-2xl .mb-10 .no-underline}
In this lab, you'll learn how to use Vertex AI - Google Cloud's newly announced managed ML platform - to build end-to-end ML workflows. You'll learn how to go from raw data to deployed model, and will leave this workshop ready to develop and productionize your own ML projects with Vertex AI.In this lab, we're using Cloud Shell to build a custom Docker image to demonstrate custom containers for training with Vertex AI.

While we're using TensorFlow for the model code here, you could easily replace it with another framework.

[Prerequisite]{.text-sky-600} : 
 - Basic knowledge of Machine Leaning
 - EDP Machine Learing Training Project (workbench enabled)
 - [Create New Workbench]{.text-sky-600}
  
What you learn:
 - Build and containerize model training code using Cloud Shell
 - Submit a custom model training job to Vertex AI
 - 
::

::docCard{id="2"}
### [2. Intro to Vertex AI]{.text-center .text-gray-500 .text-2xl .mb-10 .no-underline}
This lab uses the newest AI product offering available on Google Cloud. Vertex AI integrates the ML offerings across Google Cloud into a seamless development experience. Previously, models trained with AutoML and custom models were accessible via separate services. The new offering combines both into a single API, along with other new products. You can also migrate existing projects to Vertex AI.

In addition to model training and deployment services, Vertex AI also includes a variety of MLOps products, including Vertex Pipelines (the focus of this lab), Model Monitoring, Feature Store, and more. You can see all Vertex AI product offerings in the diagram below.

![vertex-overview image](/images/vertex-overview.png)

::

::docCard{id="3"}
### [3. Cloud environment setup]{.text-center .text-gray-500 .text-2xl .mb-10 .no-underline}

You'll need a EDP Google Cloud ML Training Platform project. To create a project, follow the request form here.

Step 1: Start Cloud Shell

In this lab you're going to work in a Cloud Shell session, which is a command interpreter hosted by a virtual machine running in Google's cloud. You could just as easily run this section locally on your own computer, but using Cloud Shell gives everyone access to a reproducible experience in a consistent environment. After the lab, you're welcome to retry this section on your own computer.

Activate Cloud Shell

From the top right of the Cloud Console, click the button below to Activate Cloud Shell:

![activate image](/images/activate.png)

If you've never started Cloud Shell before, you're presented with an intermediate screen (below the fold) describing what it is. If that's the case, click Continue (and you won't ever see it again). Here's what that one-time screen looks like:

![cloud-shell-setup image](/images/cloud-shell-setup.png)

It should only take a few moments to provision and connect to Cloud Shell.
This virtual machine is loaded with all the development tools you need. It offers a persistent 5GB home directory and runs in Google Cloud, greatly enhancing network performance and authentication. Much, if not all, of your work in this codelab can be done with simply a browser or your Chromebook.

Once connected to Cloud Shell, you should see that you are already authenticated and that the project is already set to your project ID.

Run the following command in Cloud Shell to confirm that you are authenticated:

```
gcloud auth login
gcloud config set project <PROJECT_ID>
echo $GOOGLE_CLOUD_PROJECT
```
Step 2: Create a Cloud Storage Bucket

To run a training job on Vertex AI, we'll need a storage bucket to store our saved model assets. The bucket needs to be regional. We're using us-central here, but you are welcome to use another region (just replace it throughout this lab). If you already have a bucket you can skip this step.

Run the following commands in your Cloud Shell terminal to create a bucket:

```
BUCKET_NAME=gs://$GOOGLE_CLOUD_PROJECT-mlcore/ml_models_bin
gsutil mb -l us-central1 $BUCKET_NAME
```
Step 3: Create a Vertex AI Workbench instance

From the Vertex AI section of your Cloud Console, click on Workbench:

![select-workbench image](/images/select-workbench.png){ .w-52}

Please complete the following lab (skip this lab if you already have a workbench running): Create New Workbench

Step 4: Open your Notebook

Once the instance has been created, select Open JupyterLab:

![open-instance image](/images/open-instance.png){ .w-96}

::

::docCard{id="4"}
### [4. Containerize training code]{.text-center .text-gray-500 .text-2xl .mb-10 .no-underline}

We'll submit this training job to Vertex by putting our training code in a Docker container and pushing this container to Google Container Registry. Using this approach, we can train a model built with any framework.

Step 1: Set up files

To start, from the terminal in Workbench, run the following commands to create the files we'll need for our Docker Container:

![open-instance image](/images/open-python-notebook.png){ .w-80}

```
cd /home/jupyter/edp-ml-training/training
mkdir mpg
cd mpg
touch Dockerfile
mkdir trainer
touch trainer/train.py
```

You should now have an mpg/ directory that looks like the following:

```py
+ Dockerfile
+ trainer/
    + train.py
```    
To view and edit these files, we'll use Workbench built-in code editor.

Open the Dockerfile and copy the following:

```py
FROM gcr.io/deeplearning-platform-release/tf2-cpu.2-3
WORKDIR /

# Copies the trainer code to the docker image.
COPY trainer /trainer

# Sets up the entry point to invoke the trainer.
ENTRYPOINT ["python", "-m", "trainer.train"]
```
![wb-edit-docker image](/images/wb-edit-docker.png)


This Dockerfile uses the Deep Learning Container TensorFlow Enterprise 2.3 Docker image. The Deep Learning Containers on Google Cloud come with many common ML and data science frameworks pre-installed. The one we're using includes TF Enterprise 2.3, Pandas, Scikit-learn, and others. After downloading that image, this Dockerfile sets up the entrypoint for our training code, which we'll add in the next step.

Step 2: Add model training code

From the Workbench editor, next open the train.py file and copy the code below (this is adapted from the tutorial in the TensorFlow docs).

```

# This will be replaced with your bucket name after running the `sed` command in the tutorial
BUCKET = "BUCKET_NAME"

import numpy as np
import pandas as pd
import pathlib
import tensorflow as tf

from tensorflow import keras
from tensorflow.keras import layers

print(tf.__version__)

"""## The Auto MPG dataset

The dataset is available from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/).

### Get the data
First download the dataset.
"""

"""Import it using pandas"""

dataset_path = "https://storage.googleapis.com/io-vertex-codelab/auto-mpg.csv"
dataset = pd.read_csv(dataset_path, na_values = "?")

dataset.tail()

"""### Clean the data

The dataset contains a few unknown values.
"""

dataset.isna().sum()

"""To keep this initial tutorial simple drop those rows."""

dataset = dataset.dropna()

"""The `"origin"` column is really categorical, not numeric. So convert that to a one-hot:"""

dataset['origin'] = dataset['origin'].map({1: 'USA', 2: 'Europe', 3: 'Japan'})

dataset = pd.get_dummies(dataset, prefix='', prefix_sep='')
dataset.tail()

"""### Split the data into train and test

Now split the dataset into a training set and a test set.

We will use the test set in the final evaluation of our model.
"""

train_dataset = dataset.sample(frac=0.8,random_state=0)
test_dataset = dataset.drop(train_dataset.index)

"""### Inspect the data

Have a quick look at the joint distribution of a few pairs of columns from the training set.

Also look at the overall statistics:
"""

train_stats = train_dataset.describe()
train_stats.pop("mpg")
train_stats = train_stats.transpose()
train_stats

"""### Split features from labels

Separate the target value, or "label", from the features. This label is the value that you will train the model to predict.
"""

train_labels = train_dataset.pop('mpg')
test_labels = test_dataset.pop('mpg')

"""
### Normalize the data

Look again at the `train_stats` block above and note how different the ranges of each feature are.

It is good practice to normalize features that use different scales and ranges. Although the model *might* converge without feature normalization, it makes training more difficult, and it makes the resulting model dependent on the choice of units used in the input.

Note: Although we intentionally generate these statistics from only the training dataset, these statistics will also be used to normalize the test dataset. We need to do that to project the test dataset into the same distribution that the model has been trained on.
"""

def norm(x):
  return (x - train_stats['mean']) / train_stats['std']
normed_train_data = norm(train_dataset)
normed_test_data = norm(test_dataset)

"""This normalized data is what we will use to train the model.

Caution: The statistics used to normalize the inputs here (mean and standard deviation) need to be applied to any other data that is fed to the model, along with the one-hot encoding that we did earlier.  That includes the test set as well as live data when the model is used in production.

## The model

### Build the model

Let's build our model. Here, we'll use a `Sequential` model with two densely connected hidden layers, and an output layer that returns a single, continuous value. The model building steps are wrapped in a function, `build_model`, since we'll create a second model, later on.
"""

def build_model():
  model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=[len(train_dataset.keys())]),
    layers.Dense(64, activation='relu'),
    layers.Dense(1)
  ])

  optimizer = tf.keras.optimizers.RMSprop(0.001)

  model.compile(loss='mse',
                optimizer=optimizer,
                metrics=['mae', 'mse'])
  return model

model = build_model()

"""### Inspect the model

Use the `.summary` method to print a simple description of the model
"""

model.summary()

"""Now try out the model. Take a batch of `10` examples from the training data and call `model.predict` on it.

It seems to be working, and it produces a result of the expected shape and type.

### Train the model

Train the model for 1000 epochs, and record the training and validation accuracy in the `history` object.

Visualize the model's training progress using the stats stored in the `history` object.

This graph shows little improvement, or even degradation in the validation error after about 100 epochs. Let's update the `model.fit` call to automatically stop training when the validation score doesn't improve. We'll use an *EarlyStopping callback* that tests a training condition for  every epoch. If a set amount of epochs elapses without showing improvement, then automatically stop the training.

You can learn more about this callback [here](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/EarlyStopping).
"""

model = build_model()

EPOCHS = 1000

# The patience parameter is the amount of epochs to check for improvement
early_stop = keras.callbacks.EarlyStopping(monitor='val_loss', patience=10)

early_history = model.fit(normed_train_data, train_labels, 
                    epochs=EPOCHS, validation_split = 0.2, 
                    callbacks=[early_stop])


# Export model and save to GCS
model.save(BUCKET + '/mpg/model')

```
- Replace the following:
    - BUCKET_NAME: The Bucket created in "Cloud environment setup" section (```<YOUR PROJECT NAME>-mlcore/ml_models_bin```).

Step 3: Build and test the container locally

From your Workbench Terminal, run the following to define a variable with the URI of your container image in Google Container Registry:

```py
IMAGE_URI="gcr.io/$GOOGLE_CLOUD_PROJECT/mpg:v1"
```
Then, build the container by running the following from the root of your mpg directory:

```py
docker build ./ -t $IMAGE_URI
```
Once you've built the container, push it to Google Container Registry:

```py
docker push $IMAGE_URI
```

To verify your image was pushed to Container Registry, you should see something like this when you navigate to the Container Registry section of your console:

![wb-edit-docker image](/images/container-reg.png){.w-96}

::

::docCard{id="5"}
### [5. Run a training job on Vertex AI]{.text-center .text-gray-500 .text-2xl .mb-10 .no-underline}

::inlineAlert

You are welcome to experiment with larger machine types and GPUs if you'd like. If you use GPUs, you'll need to use a GPU-enabled base container image.
::

::