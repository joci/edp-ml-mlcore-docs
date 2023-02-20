<template>
  <div class="rounded-md bg-green-50 p-4 mb-5">
    <div class="flex">
      <div class="flex-shrink-0">
        <DocumentTextIcon class="h-7 w-7 text-green-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-l font-medium text-green-800 -mt-0">Note</h3>
        <div class="mt-0 text-sm text-green-700">
          <slot class="-mt-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CheckCircleIcon,
  BanknotesIcon,
  DocumentTextIcon,
} from "@heroicons/vue/20/solid";
</script>
