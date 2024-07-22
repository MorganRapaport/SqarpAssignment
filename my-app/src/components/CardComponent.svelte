<script>
  import Button from './Button.svelte';

  export let imageSrc = "";
  export let header = "";
  export let subheader = "";
  export let paragraph = "";
  export let buttonText = "";
  export let buttonClick = () => {};
  export let reverse = false; // För att avgöra om den ska vara spegelvänd eller ej
</script>

<div class={`card flex flex-col ${reverse ? 'md:flex-row-reverse md:space-x-reverse md:space-x-[5.125rem]' : 'md:flex-row md:space-x-[3.125rem]'} items-center rounded-lg overflow-hidden mx-auto my-20 max-w-[1440px] px-4 md:px-10`}>
  <img src={imageSrc} alt="Card Image" class="w-full md:w-1/2 h-[300px] md:h-[490px] object-cover" />
  <div class="flex flex-col justify-between max-w-full w-auto ${reverse ? 'md:pl-[5.125rem] md:pr-0' : 'md:pr-[8.125rem] md:pl-[2rem]'} flex-grow mt-4 md:mt-0">
    <div>
      <span class="text-sm md:text-base font-bold text-orange-500 block">{subheader}</span>
      <h3 class="text-2xl md:text-5xl font-bold text-[#0D0F33] mt-2 md:mt-5 mb-[10px] md:mb-[20px]">{header}</h3>
      <p class="text-base md:text-2xl text-gray-700 mb-[10px] md:mb-[20px] leading-[24px] md:leading-[36px] w-full md:w-[620px] flex-shrink-0">{paragraph}</p>
    </div>
    <div class="mt-4 md:mt-0">
      <Button label={buttonText} type="ctaBtn" on:click={buttonClick} />
    </div>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 5rem auto;
    max-width: 1440px;
  }

  .card img {
    width: 100%;
    object-fit: cover;
  }

  .card div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .card {
      flex-direction: row;
    }
    .card.md\:flex-row-reverse {
      flex-direction: row-reverse;
    }
  }
</style>
