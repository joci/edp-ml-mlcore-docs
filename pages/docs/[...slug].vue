<script setup>
const { path } = useRoute();
const { page, toc, navigation } = useContent();


const mainDir = path.substring(path.lastIndexOf('/') + 1);

const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let mldocs = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    mldocs: await mldocs,
    surround: await surround,
  };
});



</script>
<template>
  <div>
    <NuxtLayout :name=" page.layout">

      <DocsBreadCrumb :title="data.mldocs.title" :directory="data.mldocs._dir" />

      
      

      <div class=" pb-3"></div>

      <div
        v-if="data && data.mldocs && data.mldocs.layout!== 'lablist' && data.mldocs.title"
        class="text-center text-gray-500 text-3xl mb-10 scroll-mt-20"
      >
        <h1>{{ data.mldocs.title }}</h1>
      </div>
      <div class="prose max-w-none">
        <ContentRenderer :value="page">
          <!-- render rich text from document -->
          <ContentRendererMarkdown :value="page" />
        </ContentRenderer>
      </div>
    </NuxtLayout>
  </div>
</template>
<style scoped>
.prose :where(a):not(:where([class~="not-prose"] *)) {
  text-decoration: none;
  scroll-margin-top: 2.75rem;
}

.prose :where(img):not(:where([class~="not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;

  display: block;
  margin-left: auto;
  margin-right: auto;
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
  scroll-margin-top: 2.75rem;
  scroll-padding-top: 2rem;
  color: var(--tw-prose-headings);
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}
</style>
