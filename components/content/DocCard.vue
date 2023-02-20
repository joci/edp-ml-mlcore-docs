<script setup>
import { PencilIcon, UserGroupIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";

defineProps({
  summary: {
    type: Boolean,
    default: false,
  },
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
  writtenBy: {
    type: String,
    default: "Edp Team",
  },
  id: {
    type: String,
    default: "none",
  },
});
</script>

<template>
  <div
    class="overflow-hidden rounded-lg bg-white text-base drop-shadow-sm lg:text-sm selection:sm:rounded-lg sm:shadow border border-r-6 border-gray-100 w-full mb-7"
  >
    <article class="px-4 sm:px-6">
      <div v-if="summary">
        <h3 class="text-2xl font-medium leading-6 text-gray-600 mb-5 mt-4">
          <span v-if="number != 0" class="mr-2">{{ number }}.</span>{{ title }}
        </h3>
        <p class="text-gray-600 flex items-center px-2 py-2 -ml-2">
          <PencilIcon
            class="text-gray-400 group-hover:text-gray-500' mr-4 h-5 w-5"
            aria-hidden="true"
          />
          Last updated {{ updated }}
        </p>
        <p class="text-gray-600 flex items-center px-2 -mt-3 -ml-2">
          <UserGroupIcon
            class="text-gray-400 group-hover:text-gray-500' mr-4 h-5 w-5"
            aria-hidden="true"
          />
          Written by {{ writtenBy }}
        </p>
      </div>
      <div :id="id"><slot /></div>
    </article>
  </div>
</template>
