<script>
  import HeroCard from '../components/HeroCard.svelte';
  import Solutions from '../components/Solutions.svelte';
  import CardComponent from '../components/cardComponent.svelte'; // Import the cardComponent
  import '../styles/app.css';
  import ContactComponent from '../components/contactComponent.svelte';
	import CarouselComponent from '../components/CarouselComponent.svelte';
  import FooterComponent from '../components/FooterComponent.svelte';
</script>

<main class="p-4">
  <HeroCard />
  <Solutions/>

  <CardComponent 
    imageSrc="/src/assets/cofee.png"
    header="E-optimization"
    subheader="SOLUTIONS"
    paragraph="Business that achieve digital data excellence see +50% online revenue growth. E-optimization is our method for getting there in < 4 weeks without major investments."
    buttonText="Explore"
    buttonClick={() => console.log("Explore E-optimization clicked")}
		reverse={true} 
  />

  <CardComponent 
	imageSrc="/src/assets/chart.png"
	header="Data Distribution"
    subheader="SOLUTIONS"
    paragraph="Automate data delivery to customers to reduce admin cost and time-to-market by 90%, while growing partner sales."
    buttonText="Explore"
    buttonClick={() => console.log("Explore Data Distribution clicked")}
  />
	<CardComponent 
    imageSrc="/src/assets/computer.png"
    header="E-optimization"
    subheader="SOLUTIONS"
    paragraph="SQARP eCom services is a suite of tools for managing product information and digital assets that help companies excel in digital retail."
    buttonText="Explore"
    buttonClick={() => console.log("Explore E-optimization clicked")}
		reverse={true} 
  />

  <CardComponent 
	imageSrc="/src/assets/boat.png"
	header="Data Distribution"
    subheader="SOLUTIONS"
    paragraph="Automate product data onboarding from all your suppliers to scale your catalogue endlessly while significantly improving customer experience."
		buttonText="Explore"
    buttonClick={() => console.log("Explore Data Distribution clicked")}
  />
	<CardComponent 
    imageSrc="/src/assets/blue.png"
    header="E-optimization"
    subheader="SOLUTIONS"
    paragraph="Easy-to-use library of AI-tools for product information professionals, increasing merchandising productivity 10x."
		buttonText="Explore"
    buttonClick={() => console.log("Explore E-optimization clicked")}
		reverse={true} 
  />
	<ContactComponent/>
	<CarouselComponent/>
	<FooterComponent/>
	
</main>
