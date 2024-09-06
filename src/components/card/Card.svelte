<script>
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  
    // Array of card objects
    export let cards = [
      {
        image: 'https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic59-free-img-300x298.jpg', 
        buttonText: 'Cactus'
      },
      {
        image: 'https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic60-free-img-300x298.jpg',
        buttonText: 'Bonsai'
      },
      {
        image: 'https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic61-free-img-300x298.jpg',
        buttonText: 'Succulent'
      },
      {
        image: 'https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2021/03/indoor-plant-secculant-300x300.jpg',
        buttonText: 'Indoor plant'
      }
    ];
  </script>
  
  <!-- Loop through the cards array to create multiple sections -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-300 gap-4">
    {#each cards as card}
      <div class="h-[300px] flex flex-col items-center space-y-4 p-4 rounded-lg shadow-sm">
        <!-- Image with hover effect -->
        <div class="flex-shrink-0">
          <div class="relative h-80 w-80 overflow-hidden rounded-full">
            <img src={card.image} alt="Card Image" class="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
          </div>
        </div>
      
        <!-- Button with arrow -->
        <div>
          <button class=" text-black py-2 px-4 flex items-center transition-colors">
            {card.buttonText}
            <FontAwesomeIcon icon={faArrowRight} class="ml-2" />
          </button>
        </div>
      </div>
    {/each}
  </section>
  
  <style>
    /* Add extra styles for the hover pop-up effect */
    .hover\:scale-110:hover {
      transform: scale(1.1);
    }
  </style>
  