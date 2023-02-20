<script setup>
const { path } = useRoute();

const { toc, navigation } = useContent();

const observer = ref({});
const currentSection = ref("");
const currentSections = ref([]);

const boundingRectTop = ref("");
const intersectionRectTop = ref("");
const ratioref = ref("");
const currentEmelemt = ref("");
const intersectionRatio = ref("");

//from mdn
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;

//

onMounted(() => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer.value = new IntersectionObserver((entries) => {
    currentSections.value = [];
    entries.forEach((entry, index) => {
      const ratio = entry.intersectionRatio;
      const boundingRect = entry.boundingClientRect;
      const intersectionRect = entry.intersectionRect;

      /*if (entry.intersectionRatio > prevRatio) {
        currentSections.value.push(entry.target.getAttribute("id"));
      }

      prevRatio = entry.intersectionRatio;
      */
      boundingRectTop.value = boundingRect.top;
      intersectionRectTop.value = intersectionRect.top;
      ratioref.value = entry.intersectionRatio;
      currentEmelemt.value = entry.target.getAttribute("id");
      intersectionRatio.value = entry.intersectionRatio;
      if (ratio === 0) {
        //currentSections.value.push(entry.target.getAttribute("id"));
      } else if (ratio < 1) {
        if (boundingRect.top < intersectionRect.top) {
          currentSections.value.push(entry.target.getAttribute("id"));
        } else {
          currentSections.value.push(entry.target.getAttribute("id"));
        }
      } else if (entry.intersectionRatio >= 1) {
        currentSections.value.push(entry.target.getAttribute("id"));
      }

      if (entry.intersectionRatio >= 1) {
        currentSections.value.push(entry.target.getAttribute("id"));
      }
    });
  });

  document.querySelectorAll("article h3").forEach((section) => {
    observer.value.observe(section);
  });

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }
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
        <p>Current element: {{ currentEmelemt }}</p>
        <p>boundingRectTop: {{ boundingRectTop }}</p>
        <p>intersectionRectTop: {{ intersectionRectTop }}</p>
        <p>ratioref : {{ ratioref }}</p>
        <p>intersectionRatio: {{ intersectionRatio }}</p>
        <DocsToc
          v-if="toc.links"
          :links="toc.links"
          :currentSection="currentSection"
          :currentSections="currentSections"
          :boundingRectTop="boundingRectTop"
          :intersectionRectTop="intersectionRectTop"
        />
      </div>

      <!--End of main div-->
    </div>
  </div>
</template>
