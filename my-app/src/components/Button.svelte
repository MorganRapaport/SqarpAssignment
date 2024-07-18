<script>
  export let label = "";
  export let type = "primary"; // "primary", "secondary", "loginBtn"
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="py-2 px-4 rounded-48 text-base
    {type === 'primary' ? 'bg-customOrange text-white hover:bg-customOrange' : ''}
    {type === 'secondary' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100' : ''}
    {type === 'loginBtn' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-bold' : ''}">
  {label}
</button>
