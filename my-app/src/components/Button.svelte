<script>
  export let label = "";
  export let type = "primary"; // "primary", "secondary", "loginBtn", "ctaBtn"
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="flex items-center justify-center py-2 px-4 rounded-full
    {type === 'primary' ? 'bg-[#FF5722] text-white hover:bg-[#E64A19]' : ''}
    {type === 'secondary' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100' : ''}
    {type === 'loginBtn' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold' : ''}
		{type === 'contactBtn' ? 'bg-[#AF3F12] text-white text-bold text-2xl hover:bg-black w-[13rem] h-[4.375rem] mr-16' : ''}
		{type === 'touchBtn' ? 'bg-[#BEE2FF] text-black border text-xs border-gray-300 hover:bg-gray-100 font-bold' : ''}
		{type === 'startBtn' ? 'text-2xl font-bold bg-black text-white w-[12.3rem] h-[4.3rem] transform transition-transform duration-300 hover:scale-105' : ''}
    {type === 'ctaBtn' ? 'text-2xl font-bold bg-black text-white w-[12.3rem] h-[4.3rem] mt-8 transform transition-transform duration-300 hover:scale-105' : ''}">
  {label}
  {#if type === 'ctaBtn'}
    <img src="src/assets/arrow.png" alt="Arrow" class="ml-4 w-6 h-4" />
  {/if}
</button>

<style>
  /* Add any additional styles if necessary */
</style>
