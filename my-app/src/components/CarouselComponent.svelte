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
  <div class="flex animate-marquee hover:pause space-x-8 w-[200%]">
    {#each logosTop as logo}
      <div class="p-4 transform transition-transform duration-300 hover:scale-105">
        <div class="flex flex-col items-center justify-center bg-[#F8F9FB] w-52 h-32">
          <img src={logo.src} alt={logo.title} class="h-16 mx-auto mb-2" />
          <p class="text-center text-base font-semibold">{logo.title}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="overflow-hidden mt-6 w-full">
  <div class="flex animate-marquee-reverse hover:pause space-x-8 w-[200%]">
    {#each logosBottom as logo}
      <div class="p-4 transform transition-transform duration-300 hover:scale-105">
        <div class="flex flex-col items-center justify-center bg-[#F8F9FB] w-52 h-32">
          <img src={logo.src} alt={logo.title} class="h-16 mx-auto mb-2" />
          <p class="text-center text-sm">{logo.title}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(50%); }
  }

  .animate-marquee {
    animation: marquee 80s linear infinite;
  }

  .animate-marquee-reverse {
    animation: marquee-reverse 80s linear infinite;
  }

  .hover\:pause:hover {
    animation-play-state: paused;
  }
</style>
