<script>
  import Button from "./Button.svelte";
</script>

<div class="hero-card bg-cover bg-center rounded-[24px] md:rounded-[48px] p-6 md:p-10 relative overflow-hidden h-[620px] mt-0" style="background-image: url('/src/assets/background-card.jpg');">
  <div class="relative z-10 pl-2 md:pl-8">
    <div class="mb-4 md:mb-8">
      <h1 class="text-3xl md:text-7xl font-bold text-black mt-10 md:mt-28">
        Win online with the <br class="hidden md:block" /> best product information.
      </h1>
      <p class="text-base md:text-[24px] text-[#0D0F33] mt-4">
        Get in touch today to find out how to grow your online <br class="hidden md:block" /> business by getting serious about product information.
      </p>
    </div>
    <div class="hidden md:block mt-16"> <!-- Added mt-16 for 64px margin -->
      <Button label="Get started" type="startBtn" on:click={() => console.log('Get started clicked')} />
    </div>
  </div>
  <div class="block md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2">
    <Button label="Get started" type="startBtn" on:click={() => console.log('Get started clicked')} />
  </div>
</div>

<style>
  /* Tailwind CSS styles are used directly in the class attributes */
</style>
