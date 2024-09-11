<script setup>
import { NO_LINKS_SECTIONS } from '@/constants/sections.js'
</script>

<template>
  <div
    class="
      the-line hidden md:block fixed w-px h-full bg-tint-1 top-0 z-50
      right-[calc(((100vw-700px)/2)+101px)]
    "
  />

  <header class="relative overflow-hidden">
    <img src="@/assets/bg-mini.png" class="md:w-[700px] mx-auto" />
    <div class="absolute top-0 left-0 -z-10 w-screen h-full overflow-hidden">
      <img src="@/assets/bg-full.png" class="w-full h-full scale-105 object-cover max-w-none" />
    </div>
  </header>

  <section class="md:w-[700px] mx-auto">
    <main class="py-5 md:py-8">
      <h1 class="text-center text-6xl md:text-9xl font-qwitcher">Bess Basics Gates</h1>
    </main>

    <section class="the real roadmap" dir="rtl">

      <template v-for="section in NO_LINKS_SECTIONS" :key="section.id">
        <section
          :class="[
            section.id == 1019 && 'md:h-[185px]' ,
            'mb-5 md:mb-8'
          ]"
        >
          <img src="@/assets/dashed-line.svg" class="hidden md:block" />
  
          <div class="flex flex-col md:flex-row md:py-6 gap-y-4">
            <div class="flex-shrink-0 md:w-[109px] md:pr-4">
              <h2
                class="font-aref px-4 md:px-0 text-2xl md:text-[32px] md:text-center w-full md:-rotate-90 md:text-nowrap"
                style="transform-origin: 70% 100%;"
              >
                {{ section.title }}
              </h2>
            </div>

            <img src="@/assets/dashed-line.svg" class="md:hidden max-w-none h-0.5 w-full object-cover" />
  
            <div class="flex-grow px-4 md:px-6" v-html="section.html_inject" />
          </div>
        </section>
      </template>

    </section>

    <footer class="relative my-8 md:my-16" dir="rtl">
      <img
        src="@/assets/footer-dash.svg"
        class="absolute top-0 left-0 -z-20 hidden md:block"
      />

      <div class="flex flex-col md:flex-row gap-y-4 md:pt-16 md:pb-10">
        <div class="flex-shrink-0 md:w-[109px] md:pr-4">
          <h2
            class="font-aref px-4 md:px-0 text-2xl md:text-[32px] md:text-center w-full md:-rotate-90 md:text-nowrap"
            style="transform-origin: 70% 100%;"
          >
            عبدالعزيز البسة
          </h2>
        </div>

        <img src="@/assets/dashed-line.svg" class="md:hidden max-w-none h-0.5 w-full object-cover" />

        <div class="flex-grow px-4 md:pl-10 md:pr-6 flex flex-col font-montserrat text-tint-2" dir="ltr">
          <p class="text-sm leading-6 md:pl-20 pb-5 md:pb-7">
            Dedicated Software Engineer with a proven track record in the computer software industry. Proficient in leveraging Microsoft technologies, including .NET Core, C#, ASP.NET Core MVC, API and SQL Server. Specialized skills include object-oriented programming, database design, and web development.
          </p>

          <section class="flex flex-col md:flex-row items-center text-center md:text-left gap-y-5 gap-x-8">
            <img src="@/assets/bess.png" class="w-32 md:w-40" >

            <div class="flex flex-col items-center md:items-start">
              <h2 class="text-primary text-lg md:text-xl font-semibold mb-1 md:mb-2">Abdelaziz Elbessa</h2>
              <h3 class="text-2xl md:text-3xl font-qwitcher mb-1 md:mb-2">aka ( Bess Gates )</h3>
              <h2 class="text-sm font-medium mb-4">Software Engineer || BackEnd .NET</h2>
              <div class="flex items-center gap-x-6">
                <a href="https://x.com/MrXroboT" target="_blank"><img src="@/assets/icons/twitter.svg" /></a>
                <a href="https://github.com/mrXrobot26" target="_blank"><img src="@/assets/icons/github-mini.svg" /></a>
                <a href="https://www.linkedin.com/in/bess-gates" target="_blank"><img src="@/assets/icons/linkedin.svg" /></a>
                <a href="https://www.youtube.com/@Bess_Gates" target="_blank"><img src="@/assets/icons/youtube-mini.svg" /></a>
                <a href="https://web.facebook.com/abdo.elbessa10" target="_blank"><img src="@/assets/icons/facebook.svg" /></a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>

    <p class="text-center pb-5 md:pb-8">
      رسالة من نور وائل: اشرب قهوة
    </p>
    <img src="@/assets/coffee.jpeg" class="w-52 h-52 md:w-60 md:h-60 object-cover rounded-md mx-auto mb-5 md:mb-8" />
  </section>
</template>