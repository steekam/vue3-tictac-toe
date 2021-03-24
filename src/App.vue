<template>
 <main class="grid h-screen grid-cols-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
   <div class="flex flex-col items-center justify-center gap-10">
     <h1>Grab a friend and play the Tic Tac Toe game.</h1>
     <p>Relive the childhood memories.</p>
   </div>

   <div class="flex items-center justify-center">
     <div class="px-10 py-6 bg-white shadow-lg">
       <header></header>
       
       <!-- Booard grid -->
       <div class="grid grid-cols-3 grid-rows-3 board">
         <div v-for="n in 9" :key="n" class="w-24 h-24 border"></div>
       </div>

       <!-- Active player indicator  -->
       <div></div>
      
      <!-- Game options -->
       <footer></footer>
     </div>
   </div>
 </main>
</template>

<script>

export default {
  data() {
    return {
      msg: "This is the new age",
    }
  }
}

</script>

<style scoped>
  .board>div:nth-child(1),
  .board>div:nth-child(2),
  .board>div:nth-child(3) {
    @apply border-t-0;
  }

  .board>div:nth-child(7),
  .board>div:nth-child(8),
  .board>div:nth-child(9) {
    @apply border-b-0;
  }

  .board>div:nth-child(1),
  .board>div:nth-child(4),
  .board>div:nth-child(7) {
    @apply border-l-0;
  }

  .board>div:nth-child(3),
  .board>div:nth-child(6),
  .board>div:nth-child(9) {
    @apply border-r-0;
  }

</style>
