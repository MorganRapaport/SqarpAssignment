<script>
  import Navbar from '../components/Navbar.svelte';
  import '../styles/app.css';
</script>

<style>
  .background-svg {
    position: absolute;
    z-index: -1;
    display: block;
  }

  .svg-top-left-overflow {
    top: -288px;
    left: 0px;
    width: 1946px;
    height: 1677px;
  }

  .svg-bottom-right-overflow {
    top: 1200px;
    left: 0px;
    width: 1512px;
    height: 3548px;
  }
</style>

<div class="relative">
  <img src="/src/assets/vector1.svg" alt="Background Vector 1" class="background-svg svg-top-left-overflow" />
  <img src="/src/assets/vector2.svg" alt="Background Vector 2" class="background-svg svg-bottom-right-overflow" />

  <Navbar />
  <main class="p-4">
    <slot></slot>
  </main>
</div>
