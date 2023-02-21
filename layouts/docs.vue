<script setup>
const { toc, navigation } = useContent();

const observer = ref({});
const currentSections = ref([]);

onMounted(() => {
  let options = {
    root: null,
    rootMargin: "0px",
  };

  observer.value = new IntersectionObserver((entries) => {
    const ul = document.querySelector(".toc-links");
      var items = ul.getElementsByTagName("li");
    if (entries && items){
      entries.forEach((entry, index) => {
        const div = entry.target.getElementsByTagName("h3")[0];
        if (div != null && div.getAttribute("id")) {
          if (entry.isIntersecting) {
            for (var i = 0; i < items.length; ++i) {
              if (div.getAttribute("id") === items[i].getAttribute("id")){
                items[i].classList.remove("text-sky-500");
                items[i].classList.add("bg-blue-400");
                items[i].classList.add("text-white");
              }
            }
          } else {
            for (var i = 0; i < items.length; ++i) {
              if (div.getAttribute("id") === items[i].getAttribute("id")){
                items[i].classList.add("text-sky-500");
                items[i].classList.remove("bg-blue-400");
                items[i].classList.remove("text-white");
              }
                
            }
          }
        }
      });
    }
    //console.log('array value : ' + currentSections.value.entries.forEach((entry, index) => console.log(entry)))
  });

  document.querySelectorAll("article").forEach((section) => {
    observer.value.observe(section);
  });
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div class="bg-slate-50">
    <DocsHeader navigation="{navigation}" />

    <div
      class="mx-auto snap-y snap-mandatory .scroll-mt-20 flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"
    >
      <div class="hidden lg:relative lg:block lg:flex-none">
        <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-100 dark:hidden" />
        <div
          class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
        />
        <div
          class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"
        />
        <div
          class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5"
        >
          <nav class="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
            <DocsLeftNav :navigation-tree="navigation[0].children" :child="false" />
          </nav>
        </div>
      </div>

      <div
        class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16"
      >
        <article class="scroll-mt-56 snap-x">
          <!-- <header class="mb-9 space-y-1">
            <p class="font-display text-sm font-medium text-sky-500">Section title</p>
           <h1
              class="font-display text-3xl tracking-tight text-slate-900 dark:text-white"
            >
              My Title
            </h1>
          </header>-->
          <slot />
        </article>
      </div>

      <div
        class="cursor-pointer sm:cursor-auto hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6"
      >
        <DocsToc
          v-if="toc.links"
          :links="toc.links"
          :currentSections="currentSections"
        />
      </div>

      <!--End of main div-->
    </div>
  </div>
</template>
