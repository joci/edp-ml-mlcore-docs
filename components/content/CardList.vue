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

const { path } = useRoute()
//Thg is always the title of the page where we are trying to list all the related pages
const currentTag = path.substring(path.lastIndexOf('/') + 1);
const docsList = await queryContent('docs').only(['updated','title','description','tag','_path','_dir','_id'])
  .where({tag:currentTag})
  .find();
</script>

<template>
  <div>  
    <section class="container px-6 py-4 mx-auto">
     
      <div class="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-2">
         <!-- cards-->
        <div v-for="doc in docsList" :key="doc.title" class="  p-4 bg-white border-1 border-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
          <div class="flex items-center ">
            <h4 class=" -mt-0.5"><span class="rounded-full bg-gray-400 px-2.5 py-1.5 mx-2 text-xs font-large text-white">1</span>
           {{ doc.title }}</h4>
          </div>
          <div class="p-4 text-xs">
            <p>{{ doc.description }}
            </p>
          </div>
          <div>
            <div class="flex items-center sticky">
              <div class=" pl-4 text-[10px] pr-3"> {{doc.updated}}</div> 
                <NuxtLink :href="doc._path" class="bg-sky-500 hover:bg-sky-300 text-white text-xs rounded-lg  py-2 px-4 ">
                  Start
                </NuxtLink>     
						</div>
          </div>
        </div>






      <!--End Cards-->
      </div>
    </section>

  </div>
    
</template>