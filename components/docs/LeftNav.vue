<script setup>
import path from "path";

const route = useRoute();

defineProps({
  navigationTree: {
    type: Array,
    default: () => [],
  },
  child: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
  <ul role="list" class="space-y-9">
    <li v-for="(parent, index) in navigationTree" :key="index">
      <h2
        v-if="parent.children"
        class="font-display font-medium text-slate-900 dark:text-white"
      >
        {{ parent.title }}
      </h2>

      <ul
        role="list"
        class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
      >
        <li v-for="(child, index) in parent.children" :key="index" class="relative">
          <NuxtLink
            class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full"
            :class="
              child._path === $route.path
                ? 'font-semibold text-sky-500 before:bg-sky-500'
                : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
            "
            :to="child._path"
          >
            {{ child.title }}
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>
<style scoped></style>
