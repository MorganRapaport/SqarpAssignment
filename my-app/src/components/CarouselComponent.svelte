<script>
  let logosTop = [
    { src: '/src/assets/TopcarouselLogos/Lifesum.png', title: 'Lifesum' },
    { src: '/src/assets/TopcarouselLogos/Lookscout.png', title: 'Lookscout' },
    { src: '/src/assets/TopcarouselLogos/Microsoft.png', title: 'Microsoft' },
    { src: '/src/assets/TopcarouselLogos/Hekoru.png', title: 'Hekoru' },
    { src: '/src/assets/TopcarouselLogos/Atlassian.png', title: 'Atlassian' },
    { src: '/src/assets/TopcarouselLogos/FreshBooks.png', title: 'FreshBooks' },
    { src: '/src/assets/TopcarouselLogos/Instacart.png', title: 'Instacart' },
    { src: '/src/assets/TopcarouselLogos/Trello.png', title: 'Trello' }
  ];

  let logosBottom = [
    { src: '/src/assets/BottomcarouselLogos/Udemy.png', title: 'Udemy' },
    { src: '/src/assets/BottomcarouselLogos/Clickup.png', title: 'Clickup' },
    { src: '/src/assets/BottomcarouselLogos/Dropbox.png', title: 'Dropbox' },
    { src: '/src/assets/BottomcarouselLogos/Airtable.png', title: 'Airtable' },
    { src: '/src/assets/BottomcarouselLogos/Gitlab.png', title: 'Gitlab' },
    { src: '/src/assets/BottomcarouselLogos/Deliveroo.png', title: 'Deliveroo' },
    { src: '/src/assets/BottomcarouselLogos/Asana.png', title: 'Asana' }
  ];

  logosTop = logosTop.concat(logosTop, logosTop, logosTop, logosTop, logosTop, logosTop);
  logosBottom = logosBottom.concat(logosBottom, logosBottom, logosBottom, logosBottom, logosBottom, logosBottom);
</script>

<div class="text-center mt-32">
  <h3 class="text-orange-500 text-base font-bold">CUSTOMERS</h3>
  <p class="text-5xl font-bold mt-2 mb-10">Proud to be used by</p>
</div>

<div class="overflow-hidden w-full">
  <div class="flex animate-marquee hover:pause space-x-4 sm:space-x-8 w-[300%]">
    {#each logosTop as logo}
      <div class="p-2 sm:p-4 transform transition-transform duration-300 hover:scale-105">
        <div class="flex flex-col items-center justify-center bg-[#F8F9FB] w-32 h-20 sm:w-52 sm:h-32">
          <img src={logo.src} alt={logo.title} class="h-8 sm:h-16 mx-auto mb-1 sm:mb-2" />
          <p class="text-center text-xs sm:text-base font-semibold">{logo.title}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="overflow-hidden mt-6 w-full">
  <div class="flex animate-marquee-reverse hover:pause space-x-4 sm:space-x-8 w-[300%]">
    {#each logosBottom as logo}
      <div class="p-2 sm:p-4 transform transition-transform duration-300 hover:scale-105">
        <div class="flex flex-col items-center justify-center bg-[#F8F9FB] w-32 h-20 sm:w-52 sm:h-32">
          <img src={logo.src} alt={logo.title} class="h-8 sm:h-16 mx-auto mb-1 sm:mb-2" />
          <p class="text-center text-xs sm:text-base">{logo.title}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.3333%); }
  }

  @keyframes marquee-reverse {
    0% { transform: translateX(-33.3333%); }
    100% { transform: translateX(0); }
  }

  .animate-marquee {
    animation: marquee 40s linear infinite;
  }

  .animate-marquee-reverse {
    animation: marquee-reverse 40s linear infinite;
  }

  @media (max-width: 640px) {
    .animate-marquee {
      animation-duration: 20s;
    }

    .animate-marquee-reverse {
      animation-duration: 20s;
    }
  }

  .hover\:pause:hover {
    animation-play-state: paused;
  }
</style>
