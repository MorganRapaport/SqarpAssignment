<script>
  // No additional script needed for now
</script>

<div class="flex flex-col items-center mt-16">
  <h2 class="text-7xl font-bold text-[#0D0F33] mb-8">Our solutions.</h2>
  <div class="relative w-full max-w-4xl h-auto">
    <div class="relative w-full h-auto">
      <img src="/src/assets/solutions.png" alt="Solutions Image" class="w-full h-auto" />
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full bottom-[52.5%] left-[30.5%]"></div>
    </div>
  </div>
</div>

<style>
  .relative {
    position: relative;
  }

  .dot {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    animation: move-to-center-x-left 5s infinite;
  }

  @keyframes move-to-center-x-left {
    0% {
      left: 30.5%;
    }
    100% {
      left: 40%;
    }
  }
</style>
