<script>
  import Button from './Button.svelte';

  export let imageSrc = "";
  export let header = "";
  export let subheader = "";
  export let paragraph = "";
  export let buttonText = "";
  export let buttonClick = () => {};
  export let reverse = false; // Prop to determine the layout
</script>

<div class={`card flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white rounded-lg shadow-md overflow-hidden`}>
  <img src={imageSrc} alt="Card Image" class="w-full md:w-1/2 h-[490px] object-cover" style="width: 610px;" />
  <div class="p-6 flex flex-col justify-between">
    <div>
      <span class="text-sm font-semibold text-orange-500">{subheader}</span>
      <h3 class="text-2xl font-bold text-[#0D0F33] mt-2">{header}</h3>
      <p class="text-gray-700 mt-4">{paragraph}</p>
    </div>
    <Button label={buttonText} type="ctaBtn" on:click={buttonClick} class="mt-6" />
  </div>
</div>

<style>
  .card {
    max-width: 1440px;
    margin: 1rem auto;
  }
</style>
