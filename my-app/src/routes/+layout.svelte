<script>
  import Navbar from '../components/Navbar.svelte';
  import '../styles/app.css';
</script>

<div class="relative">
  <img src="/src/assets/vector1.svg" alt="Background Vector 1" class="absolute -z-10 block top-[-12rem] left-[0.5rem] w-[121.625rem] h-[104.8125rem]" />
  <img src="/src/assets/vector2.svg" alt="Background Vector 2" class="absolute -z-10 block top-[70rem] left-0 w-[94.5rem] h-[221.75rem]" />

  <Navbar />
  <main class="p-4">
    <slot></slot>
  </main>
</div>
