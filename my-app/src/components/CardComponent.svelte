<script>
  import Button from './Button.svelte';

  export let imageSrc = "";
  export let header = "";
  export let subheader = "";
  export let paragraph = "";
  export let buttonText = "";
  export let buttonClick = () => {};
  export let reverse = false; // Prop to determine the layout
</script>

<div class={`card flex flex-col ${reverse ? 'md:flex-row-reverse md:space-x-reverse md:space-x-[5.125rem]' : 'md:flex-row md:space-x-[3.125rem]'} items-center rounded-lg overflow-hidden mx-auto my-20 max-w-[1440px] px-10`}>
  <img src={imageSrc} alt="Card Image" class="w-full md:w-1/2 h-[490px] object-cover" style="width: 610px;" />
  <div class="flex flex-col justify-between max-w-full w-auto ${reverse ? 'md:pl-[5.125rem] md:pr-0' : 'md:pr-[8.125rem] md:pl-[2rem]'} flex-grow">
    <div class="mt-0">
      <span class="text-base font-bold text-orange-500 block">{subheader}</span>
      <h3 class="text-5xl font-bold text-[#0D0F33] mt-5 mb-[20px]">{header}</h3>
      <p class="text-2xl text-gray-700 mb-[20px] leading-[36px] w-[620px] flex-shrink-0">{paragraph}</p>
    </div>
    <Button label={buttonText} type="ctaBtn" on:click={buttonClick} />
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
    padding-left: 10px;
    padding-right: 10px;
  }

  .card img {
    width: 100%;
    height: 490px;
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
