<script>
  import Button from "./Button.svelte";

  export let label = "";
  export let type = "primary"; // "primary", "secondary", "loginBtn", "blackWhite"
  export let onClick = () => {};
</script>

<div class="hero-card bg-cover bg-center rounded-[48px] p-10 relative overflow-hidden h-[620px]" style="background-image: url('/src/assets/background-card.jpg');">
  <div class="relative z-10 mt-28 pl-8">
    <div class="mb-8">
      <h1 class="text-7xl font-bold text-black m-0">
        Win online with the <br /> best product information.
      </h1>
      <p class="text-[24px] text-[#0D0F33] mt-4">
        Get in touch today to find out how to grow your online <br /> business by getting serious about product information.
      </p>
    </div>
    <Button label="Get started" type="ctaBtn" on:click={() => console.log('Get started clicked')} />
  </div>
</div>
