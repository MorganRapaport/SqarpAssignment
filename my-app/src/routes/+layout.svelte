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
    top: 1020px; /* Adjust this value to move the SVG vertically */
    left: 0px; /* Adjust this value to move the SVG horizontally */
    width: 1512px; /* Set the width */
    height: 3548px; /* Set the height */
  }
</style>

<div class="relative">
  <!-- SVG Backgrounds -->
  <img src="/src/assets/vector1.svg" alt="Background Vector 1" class="background-svg svg-top-left-overflow" />
  <img src="/src/assets/vector2.svg" alt="Background Vector 2" class="background-svg svg-bottom-right-overflow" />

  <!-- Page Content -->
  <Navbar />
  <main class="p-4">
    <slot></slot>
  </main>
</div>
