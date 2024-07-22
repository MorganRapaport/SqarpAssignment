<script>
  // No additional script needed for now
</script>

<div class="flex flex-col items-center mt-16">
  <h2 class="text-4xl md:text-7xl font-bold text-[#0D0F33] mb-8">Our solutions.</h2>
  <div class="relative w-full max-w-4xl h-auto mt-15">
    <div class="relative w-full h-auto">
      <img src="/src/assets/solutions.png" alt="Solutions Image" class="w-full h-auto" />
      <img src="/src/assets/Node.png" class="absolute top-[46%] right-[25.45%] w-[165px] h-[155px] pulse-animation hidden sm:block" />
    </div>
  </div>
</div>

<style>
  .relative {
    position: relative;
  }

  .pulse-animation {
    animation: pulse 4s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .mt-15 {
    margin-top: 60px;
  }

  /* Ensure the Node image does not render on small screens */
  @media (max-width: 640px) {
    .pulse-animation {
      display: none;
    }
  }
</style>
