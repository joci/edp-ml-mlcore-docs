<script setup>


defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  currentSections: {
    type: Array,
    default: () => [],
  },

});
// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  console.log('Links: ' + { _links });

  return _links.map((item) => {
    return { ...item, text: item.text.substring(2) };
  });

  //return _links;
};
</script>

<template>
  <div>
  <nav aria-labelledby="on-this-page-title" class="toc w-auto">
    <header class="toc-header">
      <h3
        id="on-this-page-title"
        class="font-display text-sm font-medium text-slate-900 dark:text-white mb-3 ml-3"
      >
        On this page
      </h3>
    </header>
    <ul class="toc-links text-sm">
      <!-- render each link with depth class -->
      <li
        :id="`${link.id}`"
        v-for="(link, index) of flattenLinks(links)"
        :key="link.id"
        :class="
          currentSections.includes(`${link.id}`)
            ? 'bg-blue-400 text-white'
            : 'text-sky-500 '
        "
        class="px-4 py-1 rounded font-medium hover:bg-blue-400 hover:text-white mb-4 border-md"
      >
        <a :href="`#${link.id}`">
          <span class="rounded-full px-2 py-1 text-slate-700 bg-gray-300 mx-1">
            {{ index + 1 }}</span
          >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</div>
</template>
