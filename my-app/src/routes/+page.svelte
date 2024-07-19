<script>
  import HeroCard from '../components/HeroCard.svelte';
  import Solutions from '../components/solutions.svelte';
  import CardComponent from '../components/cardComponent.svelte'; // Import the cardComponent
  import '../styles/app.css';
</script>

<main class="p-4">
  <HeroCard />
  <Solutions/>

  <CardComponent 
    imageSrc="/src/assets/boat.png"
    header="E-optimization"
    subheader="SOLUTIONS"
    paragraph="Business that achieve digital data excellence see +50% online revenue growth. E-optimization is our method for getting there in < 4 weeks without major investments."
    buttonText="Explore"
    buttonClick={() => console.log("Explore E-optimization clicked")}
		reverse={true} 
  />

  <CardComponent 
	imageSrc="/src/assets/boat.png"
	header="Data Distribution"
    subheader="SOLUTIONS"
    paragraph="Automate data delivery to customers to reduce admin cost and time-to-market by 90%, while growing partner sales."
    buttonText="Explore"
    buttonClick={() => console.log("Explore Data Distribution clicked")}
  />
	<CardComponent 
    imageSrc="/src/assets/boat.png"
    header="E-optimization"
    subheader="SOLUTIONS"
    paragraph="Business that achieve digital data excellence see +50% online revenue growth. E-optimization is our method for getting there in < 4 weeks without major investments."
    buttonText="Explore"
    buttonClick={() => console.log("Explore E-optimization clicked")}
		reverse={true} 
  />

  <CardComponent 
	imageSrc="/src/assets/boat.png"
	header="Data Distribution"
    subheader="SOLUTIONS"
    paragraph="Automate data delivery to customers to reduce admin cost and time-to-market by 90%, while growing partner sales."
    buttonText="Explore"
    buttonClick={() => console.log("Explore Data Distribution clicked")}
  />
	<CardComponent 
    imageSrc="/src/assets/boat.png"
    header="E-optimization"
    subheader="SOLUTIONS"
    paragraph="Business that achieve digital data excellence see +50% online revenue growth. E-optimization is our method for getting there in < 4 weeks without major investments."
    buttonText="Explore"
    buttonClick={() => console.log("Explore E-optimization clicked")}
		reverse={true} 
  />

</main>
