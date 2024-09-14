<script>
  import Button from "../button/Button.svelte";

  // Example data that can be passed as props
  export let sections = [
    {
      image: "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      title: "Plants Care Instruction",
      description: "Each order includes a small care guide booklet.",
      buttonText: "Shop Now",
      onClick: () => alert('Shop Now button clicked for Section 1!')
    },
    {
      image: "https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg",
      title: "Plants Care Instruction",
      description: "Each order includes a small care guide booklet.",
      buttonText: "Shop Now",
      onClick: () => alert('Shop Now button clicked for Section 2!')
    }
  ];

  export let callToAction = {
    title: "Buy Online Now & Get 10% Off!",
    description: "Curae quia enim aute, consequatur, eius quaerat excepteur fames pharetra.",
    buttonText: "Available Now",
    onClick: () => alert('Available Now button clicked!')
  };
</script>

<div>
  <!-- Responsive Flex Layout for Background Sections -->
  <div class="flex flex-col lg:flex-row justify-around pb-8 px-6 lg:px-10 items-center align-center">
    {#each sections as section}
      <!-- Background Section -->
      <div class="relative bg-cover bg-center flex py-4 justify-center flex-col text-left h-80 w-full lg:w-1/2 flex-shrink-0 mb-6 lg:mb-0"
           style="background-image: url('{section.image}');">
        
        <!-- Dark overlay for background -->
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <!-- Content goes above the overlay -->
        <div class="relative z-10 pl-6 lg:pl-16">
          <h1 class="font-bold text-xl lg:text-2xl py-2 text-white">{section.title}</h1>
          <p class="text-white pb-2">{section.description}</p>
          <Button class="mt-6 px-4" on:click={section.onClick}>{section.buttonText}</Button>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Centered Call-to-Action Section -->
<div class="flex flex-col items-center text-center px-4 pb-10 lg:px-0">
  <h1 class="font-extrabold text-3xl lg:text-5xl py-6 lg:py-10">{callToAction.title}</h1>
  <p class="text-gray-500 text-base lg:text-lg pb-6 lg:pb-10">
    {callToAction.description}
  </p>
  <Button class="mt-6 px-4" on:click={callToAction.onClick}>{callToAction.buttonText}</Button>
</div>

<style>
  @media (max-width: 768px) {
    .h-80 {
      height: auto;
    }
    .text-xl {
      font-size: 1.25rem;
    }
    .text-3xl {
      font-size: 2rem;
    }
  }
</style>
