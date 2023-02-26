<script setup>
defineProps({

  title: {
    type: String,
    default: "Default title",
  },
  number: {
    type: String,
    default: "0",
  },
  updated: {
    type: String,
    default: "updated Date",
  },
});
</script>

<template>
    <!--<div
    class="overflow-hidden rounded-lg bg-white text-base drop-shadow-sm lg:text-sm selection:sm:rounded-lg sm:shadow border border-r-6 border-gray-100 w-1/4 mb-7"
  >
    this is a test

    </div>-->
  <div>
      
    <section class="container px-6 py-4 mx-auto">
     
      <div class="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-2">
         <!-- cards-->
        <div class="  p-4 bg-white border-1 border-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
          <div class="flex items-center ">
            <h4 class=" -mt-0.5"><span class="rounded-full bg-gray-400 px-2.5 py-1.5 mx-2 text-xs font-large text-white">1</span>
          Build Juypter-lab image</h4>
          </div>
          <div class="p-4 text-xs">
            <p>In this lab, you will learn how to create "New Juypter-lab Image", adding required python packages and extensions. This lab uses the newest AI product offering available on Google Vertex AI Workbench, Cloud Build & Container Registry.
            </p>
          </div>
          <div>
            <div class="flex items-center">
              <div class=" pl-4 text-[10px] pr-3"> Updated Feb 17, 2023</div> 
                <a href="#" class="bg-sky-500 hover:bg-sky-300 text-white text-xs rounded-lg  py-2 px-4 ">
                  Start
                </a>     
						</div>
          </div>
        </div>
         <!-- cards-->
        <div class="  p-4 bg-white border-1 border-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
          <div class="flex items-center ">
            <h4 class=" -mt-0.5"><span class="rounded-full bg-gray-400 px-2.5 py-1.5 mx-2 text-xs font-large text-white">1</span>
          Build Juypter-lab image</h4>
          </div>
          <div class="p-4 text-xs">
            <p>In this lab, you will learn how to create "New Juypter-lab Image", adding required python packages and extensions. This lab uses the newest AI product offering available on Google Vertex AI Workbench, Cloud Build & Container Registry.
            </p>
          </div>
          <div>
            <div class="flex items-center">
              <div class=" pl-4 text-[10px] pr-3"> Updated Feb 17, 2023</div> 
                <a href="#" class="bg-sky-500 hover:bg-sky-300 text-white text-xs rounded-lg  py-2 px-4 ">
                  Start
                </a>     
						</div>
          </div>
        </div>

        <!-- cards-->
        <div class="  p-4 bg-white border-1 border-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
          <div class="flex items-center ">
            <h4 class=" -mt-0.5"><span class="rounded-full bg-gray-400 px-2.5 py-1.5 mx-2 text-xs font-large text-white">1</span>
          Build Juypter-lab image</h4>
          </div>
          <div class="p-4 text-xs">
            <p>In this lab, you will learn how to create "New Juypter-lab Image", adding required python packages and extensions. This lab uses the newest AI product offering available on Google Vertex AI Workbench, Cloud Build & Container Registry.
            </p>
          </div>
          <div>
            <div class="flex items-center">
              <div class=" pl-4 text-[10px] pr-3"> Updated Feb 17, 2023</div> 
                <a href="#" class="bg-sky-500 hover:bg-sky-300 text-white text-xs rounded-lg  py-2 px-4 ">
                  Start
                </a>     
						</div>
          </div>
        </div>

        <!-- cards-->
        <div class="  p-4 bg-white border-1 border-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
          <div class="flex items-center ">
            <h4 class=" -mt-0.5"><span class="rounded-full bg-gray-400 px-2.5 py-1.5 mx-2 text-xs font-large text-white">1</span>
          Build Juypter-lab image</h4>
          </div>
          <div class="p-4 text-xs">
            <p>In this lab, you will learn how to create "New Juypter-lab Image", adding required python packages and extensions. This lab uses the newest AI product offering available on Google Vertex AI Workbench, Cloud Build & Container Registry.
            </p>
          </div>
          <div>
            <div class="flex items-center">
              <div class=" pl-4 text-[10px] pr-3"> Updated Feb 17, 2023</div> 
                <a href="#" class="bg-sky-500 hover:bg-sky-300 text-white text-xs rounded-lg  py-2 px-4 ">
                  Start
                </a>     
						</div>
          </div>
        </div>


      <!--End Cards-->
      </div>
    </section>

  </div>
    
</template>