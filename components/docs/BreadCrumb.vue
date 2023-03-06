<script setup>

defineProps({
  directory: {
    type: String,
    validator(directory){
      let newDir="";
      newDir = directory.toLowerCase().split("-").join(" ")
      return newDir;
    }
  },
  title: {
    type: String,
    default: "Default title",
  },
  

});



</script>

<template>
         <div class=" pb-11">
        <h3 class=" text-sm font-bold items-center">
          Documentation 
          <span class="rounded-lg text-[8px] text-zinc-400 shadow-sm p-1 ml-1.5 font-medium bg-white">v 1.0.0</span>
          <span class="text-zinc-200 font-medium px-3">|</span>
          <span class=" text-zinc-400  font-medium text-sm">Getting Started</span>
          <span class=" font-medium text-sm"> - 
            {{ directory }} - 
            <span v-if="title">
              {{ title }}
            </span>
            <span v-else>
              Overview
            </span>
          </span>

        </h3>
      </div>
</template>