<script>
  import Button from "./Button.svelte";
</script>

<nav class="flex justify-between items-center h-[158px] mx-10 pt-[70px] pb-[40px] px-[40px]">
  <div class="flex-1 text-2xl font-bold">
    <img src="/src/assets/logo.svg" alt="Logo" class="w-32 h-6" />
  </div>
  <ul class="flex-1 flex justify-center space-x-15">
    <li><a href="./" class="hover:text-gray-700 font-bold text-xl">Solutions</a></li>
    <li><a href="./" class="hover:text-gray-700 font-medium text-xl">About</a></li>
    <li><a href="./" class="hover:text-gray-700 font-medium text-xl">Contact</a></li>
  </ul>
  <div class="flex-1 flex justify-end space-x-5">
    <Button label="Log in" type="loginBtn" on:click={() => console.log('Log in clicked')} />
    <Button label="Create account" type="primary" on:click={() => console.log('Create account clicked')} />
  </div>
</nav>
