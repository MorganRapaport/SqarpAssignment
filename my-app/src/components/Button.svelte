<script>
  export let label = "";
  export let type = "primary"; // "primary", "secondary", "loginBtn", "ctaBtn"
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="py-2 px-4 rounded-full
    {type === 'primary' ? 'bg-[#FF5722] text-white hover:bg-[#E64A19]' : ''}
    {type === 'secondary' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100' : ''}
    {type === 'loginBtn' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold' : ''}
    {type === 'ctaBtn' ? 'text-2xl font-bold bg-black text-white w-[12.5rem] h-[4.5rem] transform transition-transform duration-300 hover:scale-105' : ''}">
  {label}
</button>
