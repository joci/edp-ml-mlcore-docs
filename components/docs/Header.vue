<template>
  <div>
  <header
    class="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
  >
    <div class="mr-6 flex lg:hidden">
      <!--Small devices-->
    </div>
    <div class="relative flex flex-grow basis-0 items-center">
      <Link href="/" aria-label="Home page">
        <span class="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block">
          LogomarkPaths
        </span>
      </Link>
    </div>
    <div class="-my-5 mr-6 sm:mr-8 md:mr-0"><!--<Search />-->Search Box</div>
    <div class="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
      <!--<ThemeSelector className="relative z-10" />-->
      <Link href="https://github.com" class="group" aria-label="GitHub">
        <!-- <DocsGitHubIcon
          class="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
        /> -->
        GitHub
      </Link>
    </div>
  </header>
</div>
</template>
