<script>
  import Button from "./Button.svelte";
  export let text = "Don't be a stranger, contact us now for a demo.";
  export let buttonText = "Get in touch";
  export let buttonClick = () => {};
</script>

<div class="bg-[#F65311] text-white py-6 px-8 rounded-3xl hidden md:flex items-center justify-between h-[9.375rem] mt-32">
  <span class="text-3xl font-semibold ml-16">{text}</span>
  <div class="flex justify-center w-auto">
    <Button label={buttonText} type="contactBtn" on:click={buttonClick} class="w-[13rem] h-[4.375rem] md:ml-16" />
  </div>
</div>

<style>
</style>
