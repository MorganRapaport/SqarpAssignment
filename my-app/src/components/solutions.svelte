<script>
  // No additional script needed for now
</script>

<div class="flex flex-col items-center mt-16">
  <h2 class="text-7xl font-bold text-[#0D0F33] mb-8">Our solutions.</h2>
  <div class="relative w-full max-w-4xl h-auto">
    <div class="relative w-full h-auto">
      <img src="/src/assets/solutions.png" alt="Solutions Image" class="w-full h-auto" />
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full top-[18%] left-[26%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full top-[18%] right-[26%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full bottom-[25%] left-[26%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full bottom-[32%] right-[49.4%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full top-[25%] right-[49.4%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full top-[45.75%] right-[31%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full bottom-[52.5%] left-[30.5%]"></div>
      <div class="dot absolute w-[10px] h-[10px] bg-red-500 rounded-full top-[73%] right-[26%]"></div>
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
  }

  @keyframes move-to-center-x-left {
    0% {
      left: 30.5%; /* Adjust this value to move the starting position to the right */
    }
    100% {
      left: 40%; /* This is the ending position */
    }
  }

  @keyframes move-to-center-x-right {
    0% {
      right: 25%;
    }
    100% {
      right: 10%; /* Adjust this value to the desired position */
    }
  }

  /* Adjusting the dot on the US Speciality labs LP line */
  .dot:nth-of-type(7) {
    animation: move-to-center-x-left 5s infinite;
  }

  .dot:nth-of-type(1),
  .dot:nth-of-type(2),
  .dot:nth-of-type(3),
  .dot:nth-of-type(5),
  .dot:nth-of-type(6),
  .dot:nth-of-type(8) {
    animation: move-to-center 10s infinite;
  }

  @keyframes move-to-center {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(calc(50% - 5px), calc(50% - 5px));
    }
  }
</style>
