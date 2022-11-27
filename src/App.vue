<script setup>
import { RouterView } from "vue-router";
</script>
 
<template >
  <body class="mx-10 font-mono text-gray-500"> 
    <header>

      <nav class="flex flex-col sm:flex-row justify-between mb-12 mt-8">
        <div>
          <RouterLink to="/" class="flex text-4xl justify-center sm:justify-start" id="sign">JYF.</RouterLink>
        </div>

        <div class="flex gap-3 justify-center items-center font-mono">
          <RouterLink to="/" class="hover:text-gray-800">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-gray-800">About</RouterLink>
          <RouterLink to="/work" class="hover:text-gray-800">Work</RouterLink>
          <RouterLink to="/projects" class="hover:text-gray-800">Projects</RouterLink>
          <RouterLink to="/contact" class="hover:text-gray-800">Contact</RouterLink>
        </div>
      </nav>
    </header>
    <RouterView />
    <p class="pt-10 text-center">© 2022 Junyi Feng </p>
  </body>
 
</template>
 
<style scoped>
#sign {
  font-family: "Times New Roman", Times, serif;
}
</style>
