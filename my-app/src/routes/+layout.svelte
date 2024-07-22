<script>
  import Navbar from '../components/Navbar.svelte';
  import '../styles/app.css';
</script>

<div class="relative">
  <img src="/src/assets/background.png" alt="Background" class="absolute -z-10 block" />
  <Navbar />
  <main class="p-4">
    <slot></slot>
  </main>
</div>
