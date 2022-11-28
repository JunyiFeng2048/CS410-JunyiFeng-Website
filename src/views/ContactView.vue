<script setup>

</script>

<template>
  <main >
    <h1 class="text-4xl text-center">Contact.</h1>
    <div class="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 text-center sm:text-xl ">Please feel free to leave feedback on your experience.</p>
      <form class="space-y-8">
          <div>
              <label for="name" class="block mb-2 text-gray-800">Your name</label>
              <input type="text" id="name" class="block p-3 w-full  text-black bg-gray-50 rounded-lg border border-gray-300 drop-shadow-xl" placeholder="Nice to meet you" required>
          </div>
          <div>
              <label for="email" class="block mb-2 text-gray-800">Your email</label>
              <input type="email" id="email" class=" block p-3 w-full text-black bg-gray-50 rounded-lg border border-gray-300  drop-shadow-xl" placeholder="hello@email.com" required>
          </div>
          
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-gray-800">Your message</label>
              <textarea id="message" rows="8" class="block p-3 w-full text-black bg-gray-50 rounded-lg border border-gray-300 drop-shadow-xl" placeholder="Leave a comment..."></textarea>
          </div>
          <div class="text-center">
            <button @click="redirectToHome()" type="submit" id="app" class="py-3 px-5 text-center text-white rounded-lg bg-gray-500 drop-shadow-xl hover:bg-gray-800">Send message</button>
          </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "#app",
  methods: {
    redirectToHome() {
      this.$router.push({ path: '/' });
      alert("Thank You!")
    },
  }
};
</script>
