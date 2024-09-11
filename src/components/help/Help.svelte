<script>
    import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  
  
    export let images = [];
    export let title = "Title here";
    export let subtitle = "Subtitle here";
    export let description = "Description here";
    export let subheading = "Subheading here";
  
    // Function to set the data
    const setData = () => {
      images = [
        "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/green-leaf-plants.jpg",
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
  
    setData();
  </script>
  
  <section
    class="min-h-screen flex flex-row lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-10"
  >
    <div class="flex flex-row gap-12">
      <div class="flex flex-row pl-2">
        {#each images as image}
          <img
            src={image}
            alt="Image"
            class="w-[250px] h-[350px] sm:w-[300px] sm:h-[600px] md:w-[350px] md:h-[700px] lg:w-[450px] lg:h-[700px] object-cover"
          />
        {/each}
      </div>
  
     <div>
        <div class="flex flex-col justify-center lg:text-left">
            <h6 class="text-lg font-bold pt-20 text-green-700 mb-2">{subtitle}</h6>
            <h1 class="text-3xl sm:text-4xl pt-4 lg:text-4xl font-bold leading-4 mb-4">{title}</h1>
      
            <p class="text-base text-xs pt-3 sm:text-lg mb-4 max-w-lg lg:max-w-2xl">
              {description}
            </p>
      
            <h3 class="text-lg pt-10 sm:text-xl font-medium">{subheading}</h3>
          </div>
          
          <!-- Social Media Icons -->
          <div class="flex space-x-4 pt-4 mt-12">
            <!-- Facebook Icon -->
            <a href="https://www.facebook.com" target="_blank" class="text-blue-600">
              <FontAwesomeIcon icon={faFacebook} class="fa-2x" />
            </a>
            
            <!-- Twitter Icon -->
            <a href="https://www.twitter.com" target="_blank" class="text-blue-400">
              <FontAwesomeIcon icon={faTwitter} class="fa-2x" />
            </a>
      
            <!-- YouTube Icon -->
            <a href="https://www.youtube.com" target="_blank" class="text-red-600">
              <FontAwesomeIcon icon={faYoutube} class="fa-2x" />
            </a>
      
            <!-- Instagram Icon -->
            <a href="https://www.instagram.com" target="_blank" class="text-pink-600">
              <FontAwesomeIcon icon={faInstagram} class="fa-2x" />
            </a>
          </div>
     </div>
    </div>
  </section>
  