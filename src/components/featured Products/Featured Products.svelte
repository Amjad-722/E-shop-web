<script>
    export let title = "Featured Products";
    export let description = "Use these paragraphs to focus on the topic in the headline. Make sure you keep it short and attractive.";
    export let products = [
      {
        name: "Lemon Bonsai",
        imageUrl: "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic25-free-img-300x300.jpg",
        stars: 5,
        price: "$50"
      },
      {
        name: "Rubber indoor plant",
        imageUrl: "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic21-free-img-300x300.jpg",
        stars: 4,
        price: "$40"
      },
      {
        name: "Boncellensis Secullant",
        imageUrl: "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic15-free-img-300x300.jpg",
        stars: 4.5,
        price: "$45"
      },
      {
        name: "Old Lady Cactus",
        imageUrl: "https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic13-free-img-300x300.jpg",
        stars: 5,
        price: "$60"
      }
    ];
  
    const getStars = (rating) => {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 ? '★' : '';
      return '★'.repeat(fullStars) + halfStar + '☆'.repeat(5 - Math.ceil(rating));
    };
  </script>
  
  <section class="mt-20 bg-gray-100 p-8">
    <h1 class="text-5xl font-bold text-left mb-4">{title}</h1>
    <p class="text-lg pt-4 text-left mb-8">{description}</p>
    <div class="grid grid-cols-1 pt-16 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each products as product}
        <div class="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
          <!-- Increased width and height of the images -->
          <img class="w-full h-72 object-cover rounded-lg mb-4" src={product.imageUrl} alt={product.name} />
          <div class="text-xl font-semibold">{product.name}</div>
          <div class="text-black mt-2">{getStars(product.stars)}</div>
          <div class="text-black text-lg mt-2">{product.price}</div>
        </div>
      {/each}
    </div>
  </section>
  
  