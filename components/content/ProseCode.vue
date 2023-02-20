<script lang="ts">
import { defineComponent } from "#imports";

const { copy, copied, text } = useClipboard();

export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
  setup() {
    const { copy, copied, text } = useClipboard();
    return {
      copy,
      copied,
      text,
    };
  },
});
</script>

<template>
  <div>
    <div class="relative">
      <div
        class="absolute -right-0 px-4 py-1 rounded-l-md text-white bg-blue-800 overflow-hidden"
      >
        <button @click="copy(code)">
          <span v-if="copied">Copied code!</span> <span v-else>copy code</span>
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
  padding-top: 1.2rem;
}
</style>
