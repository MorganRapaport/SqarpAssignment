<script>
  import Button from "./Button.svelte";
</script>

<div class="bg-[#0D0F33] rounded-48 text-white py-8 px-8 mt-20">
  <div class="flex flex-col items-start md:items-start gap-8 max-w-screen-xl mx-auto p-10">
    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 w-full">
      <div class="flex-1 w-full text-center md:text-left">
        <h3 class="text-2xl md:text-4xl font-bold mb-6 w-full">Do you have <br> any questions?</h3>
        <p class="hidden md:block text-base mb-6 opacity-80 text-[#E6E6E6]">Feel free to send us your questions or request a free demo of our product.</p>
        <div class="w-full flex justify-center md:justify-start">
          <Button label="Get in touch" type="touchBtn" on:click={() => console.log('Get in touch clicked')} />
        </div>
      </div>
    </div>
    <div class="hidden md:flex border-t border-gray-700 pt-12 flex-col md:flex-row justify-between items-start w-full">
      <div class="flex flex-col md:flex-row md:space-x-8 flex-1">
        <div class="flex flex-col space-y-2 mb-6 md:mb-0">
          <div class="flex gap-8 mb-12"> 
            <a href="/" class="text-[#E6E6E6] text-sm hover:underline">Solutions</a>
            <a href="/" class="text-[#E6E6E6] text-sm hover:underline">About</a>
            <a href="/" class="text-[#E6E6E6] text-sm hover:underline">Contact</a>
            <a href="/" class="text-[#E6E6E6] text-sm hover:underline">Log in</a>
            <a href="/" class="text-[#E6E6E6] text-sm hover:underline">Sign up</a>
          </div>
          <img src="/src/assets/logo.svg" alt="Logo" class="w-32 h-6 svg-white" />
          <p class="text-xs mt-7 text-[#E6E6E6]">
            Building the data infrastructure for online commerce
          </p>
          <p class="text-xs mt-2 text-[#E6E6E6] opacity-50">
            © 2024 – Copyright SQARP Retail Information AB
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:space-x-8 flex-1 justify-between">
        <div class="flex flex-col space-y-2 mb-6 md:mb-0">
          <h4 class="text-[10px] text-[#E6E6E6] opacity-80 ">ADDRESS</h4>
          <p class="text-sm">SQARP Retail Information AB</p>
          <p class="text-sm">Org. no. 559258-7991</p>
          <p class="text-sm">Luntmakargatan 15</p>
          <p class="text-sm">111 37 Stockholm</p>
        </div>
        <div class="flex flex-col space-y-2 mb-6 md:mb-0">
          <h4 class="text-[10px] text-[#E6E6E6] opacity-80">CONTACT</h4>
          <p class="text-sm">+46(0)8 12 85 58 89</p>
        </div>
        <div class="flex flex-col space-y-2">
          <h4 class="text-[10px] text-[#E6E6E6] opacity-80">EMAIL</h4>
          <p class="text-sm">info@sqarp.com</p>
        </div>
      </div>
    </div>
    <div class="block md:hidden mt-8 w-full text-center text-sm space-y-2">
      <img src="/src/assets/logo.svg" alt="Logo" class="w-20 h-4 mx-auto svg-white" />
      <p class="text-xs text-[#E6E6E6]">Building the data infrastructure for online commerce</p>
      <p class="text-xs text-[#E6E6E6] opacity-50">© 2024 – Copyright SQARP Retail Information AB</p>
    </div>
  </div>
</div>

<style>
  .svg-white {
    filter: invert(1) brightness(2);
  }
</style>
