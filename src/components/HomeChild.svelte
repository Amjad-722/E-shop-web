<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faPlantWilt, faDollarSign, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';
  
    // Array of content objects
    export let items = [
      {
        icon: faPlantWilt,
        heading: 'High Quality Plants',
        description: "A line about the service you've mentioned above."
      },
      {
        icon: faDollarSign,
        heading: 'Wide Plant Range',
        description: "Our plants are affordable without compromising quality."
      },
      {
        icon: faTruck,
        heading: 'Fast Delivery',
        description: "Quick and reliable delivery of all plants."
      },
      {
        icon: faHeadset,
        heading: 'Excellent Services',
        description: "We offer excellent support for all your plant needs."
      }
    ];
  </script>
  
  <!-- Loop through the items array to create multiple sections -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each items as item}
      <div class="h-[200px] flex items-center space-x-4 p-4  rounded-lg shadow-sm">
        <!-- FontAwesome Icon inside a circular background -->
        <div class="flex-shrink-0">
          <div class="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <FontAwesomeIcon icon={item.icon} class="text-green-500 h-8 w-8" />
          </div>
        </div>
      
        <!-- Text side (h2 and p) -->
        <div>
          <h2 class="text-2xl font-semibold mb-2">{item.heading}</h2>
          <p class="text-gray-600">{item.description}</p>
        </div>
      </div>
    {/each}
  </section>
  