<script setup>

</script>

<template>
  <main>
    <h1 class="text-4xl text-center pb-8">Projects.</h1>
    <section class="p-8 bg-gray-50">
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:px-0 md:px-20 gap-4 lg:gap-8 justify-center">
        <div class="p-4 bg-gray-100 rounded-lg flex items-top">
          <div class="flex flex-col">
            <img src="../assets/img/RCD.png" alt="race car" class="h-36">
            <h1 class="text-center text-2xl text-gray-600">
              <a href="https://github.com/JunyiFeng2048/RacecarDemo">Race Car Demo</a>
            </h1>
            <div>
              A demonstration of using AI algorithms to evolve cars to complete a race track.
            </div>
          </div>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg flex items-top">
          <div class="flex flex-col">
            <img src="../assets/img/IRC.png" alt="IRC" class="h-36">
            <h1 class="text-center text-2xl text-gray-600">
              <a href="https://github.com/JunyiFeng2048/Internet-Relay-Chat">IRC Chat</a>
            </h1>
            <div>
              A simple Internet Relay Chat(IRC) protocol by which clients can communicate 
              with each other. This system employs a central server which ‘relays’ messages 
              that are sent to it to other connected users. 
            </div>
          </div>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg flex items-top ">
          <div class="flex flex-col ">
            <img src="../assets/img/NLP.png" alt="URMP" class="h-36">
            <h1 class="text-center text-2xl text-gray-600">NLP URMP</h1>
            <div>
              Undergraduate Research & Mentoring Program at Portland State University. 
              Conducted paid research under CS Professor, Dr. Ameeta Agrawal, for her 
              research project Summarization Model - Used some of the latest machine 
              learning for natural language processing (ML + NLP) algorithms to analyze 
              and develop automatic summarization models.
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
