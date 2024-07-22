<script>
  import Button from "./Button.svelte";
</script>

<nav class="flex flex-col md:flex-row justify-between items-center h-auto md:h-[158px] mx-4 md:mx-10 pt-4 md:pt-[70px] pb-4 md:pb-[40px] px-4 md:px-[40px] space-y-4 md:space-y-0">
  <div class="flex-1 text-xl md:text-2xl font-bold">
    <img src="/src/assets/logo.svg" alt="Logo" class="w-24 md:w-32 h-6" />
  </div>
  <ul class="flex-1 flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0 text-center">
    <li><a href="./" class="hover:text-gray-700 font-bold text-base md:text-xl">Solutions</a></li>
    <li><a href="./" class="hover:text-gray-700 font-medium text-base md:text-xl">About</a></li>
    <li><a href="./" class="hover:text-gray-700 font-medium text-base md:text-xl">Contact</a></li>
  </ul>
  <div class="flex-1 flex flex-col md:flex-row justify-end space-x-0 md:space-x-5 space-y-2 md:space-y-0">
    <Button label="Log in" type="loginBtn" on:click={() => console.log('Log in clicked')} />
    <Button label="Create account" type="primary" on:click={() => console.log('Create account clicked')} />
  </div>
</nav>

<style>
</style>
