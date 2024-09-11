<script>
  export let images = [];
  export let title = "Title here";
  export let subtitle = "Subtitle here";
  export let description = "Description here";
  export let subheading = "Subheading here";

  // Function to set the data
  const setData = () => {
    images = [
      "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/woman-planting-plant-in-pot.jpg",
      "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/woman-planting-plant-in-pot.jpg",
    ];

    title = "Nonummy Cum Convallis";
    subtitle = "We Help Gardens Thrive!";
    description = `Elementum tristique mi montes nibh deserunt magna. Netus assumenda 
                      molestias nisi porro, nascetur molas. Habitant urna fugiat wisi nceptos 
                      sodales magna. Molestie suspendisse faucibus justo! Sollicitudin tempore 
                      unde, dolorem, blanditiis a nam beatae nihil bibendum, taciti.`;
    subheading =
      "Tempore ut mauris aenean cillum ultrices nunc aliqu auris aenean mpore utma.";
  };

  // Call the function to set data
  setData();
</script>

<section
  class="min-h-screen flex flex-row lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-10"
>
  <div class="flex flex-row gap-12">
    <div class="flex flex-row">
      {#each images as image}
        <img
          src={image}
          alt="Image"
          class="w-96 h-auto sm:w-56 md:w-64 lg:w-[250px]"
        />
      {/each}
    </div>

    <div class="flex flex-col justify-center lg:text-left">
      <h6 class="text-lg font-semibold mb-2">{subtitle}</h6>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>

     
      <p class="text-base sm:text-lg mb-4 max-w-lg lg:max-w-2xl">
        {description}
      </p>

      <h3 class="text-lg sm:text-xl font-medium">{subheading}</h3>
    </div>
  </div>
</section>
