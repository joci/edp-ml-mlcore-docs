<script setup>
const { navigation } = useContent();

const { path } = useRoute()

//const qc = await queryContent(path)
  //.where({ author })
  //.sort({ _file: -1, $numeric: true })
  //.find();

</script>

<template>
  <div class="bg-slate-50">
    <DocsHeader navigation="{navigation}" />

    <div
      class="
        mx-auto
        snap-y snap-mandatory
        .scroll-mt-20
        flex
        max-w-8xl
        justify-center
        sm:px-2
        lg:px-8
        xl:px-12
      "
    >
      <div class="hidden lg:relative lg:block lg:flex-none">
        <div
          class="absolute inset-y-0 right-0 w-[50vw] bg-slate-100 dark:hidden"
        />
        <div
          class="
            absolute
            top-16
            bottom-0
            right-0
            hidden
            h-12
            w-px
            bg-gradient-to-t
            from-slate-800
            dark:block
          "
        />
        <div
          class="
            absolute
            top-28
            bottom-0
            right-0
            hidden
            w-px
            bg-slate-800
            dark:block
          "
        />
        <div
          class="
            sticky
            top-[4.5rem]
            -ml-0.5
            h-[calc(100vh-4.5rem)]
            overflow-y-auto overflow-x-hidden
            py-16
            pl-0.5
          "
        >
          <nav class="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
            <DocsLeftNav
              :navigation-tree="navigation[0].children"
              :child="false"
            />
          </nav>
        </div>
      </div>

      <div
        class="
          min-w-0
          max-w-2xl
          flex-auto
          px-4
          py-16
          lg:max-w-none lg:pr-0 lg:pl-8
          xl:px-16
        "
      >
        <article class="scroll-mt-56 snap-x">
          <slot />
        </article>
      </div>

      <div
        class="
          cursor-pointer
          sm:cursor-auto
          hidden
          xl:sticky
          xl:top-[4.5rem]
          xl:-mr-6
          xl:block
          xl:h-[calc(100vh-4.5rem)]
          xl:flex-none
          xl:overflow-y-auto
          xl:py-16
          xl:pr-6
        "
      >
        
      </div>

      <!--End of main div-->
    </div>
  </div>
</template>