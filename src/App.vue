<template>
 <main class="grid h-screen max-w-5xl grid-cols-2 mx-auto sm:px-6 lg:px-8">
   <div class="flex flex-col justify-center gap-6">
     <h1 class="text-5xl font-semibold text-gray-800">Wanna play the Tic-tac-toe game?</h1>
     <p class="text-2xl font-medium text-gray-700">Grab a friend and start playing.</p>

     <div>
      <button class="px-3 py-2 text-lg font-semibold text-green-800 capitalize border rounded-full shadow-sm ring-2 ring-green-800">
        Start new game
      </button>
     </div>
   </div>

   <div class="flex items-center justify-center">
     <div class="px-10 py-6 space-y-6 bg-white rounded-md shadow-lg">
       <header class="flex justify-between">
         <div class="flex flex-col gap-2 text-blue-800">
           <div>X</div>
           <div class="text-sm">
             <span>4</span> wins
           </div>
         </div>

         <div class="flex flex-col gap-2 text-green-800">
           <div>O</div>
           <div class="text-sm">
             <span>4</span> wins
           </div>
         </div>

         <div class="flex flex-col gap-2 text-gray-600">
           <div>O</div>
           <div class="text-sm">
             <span>2</span> draws
           </div>
         </div>
       </header>
       
       <!-- Booard grid -->
       <div class="grid grid-cols-3 grid-rows-3 board">
         <div v-for="n in 9" :key="n" class="w-24 h-24 border"></div>
       </div>

       <!-- Active player indicator  -->
       <div class="grid w-20 grid-cols-2 mx-auto overflow-hidden font-bold border-2 rounded-full">
         <div class="flex justify-center p-2 rounded-full cursor-pointer">X</div>
         <div class="flex justify-center p-2 text-white bg-blue-700 rounded-full cursor-pointer">O</div>
       </div>
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
