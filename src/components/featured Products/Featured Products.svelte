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

<!-- Container with internal padding but no external padding/margin -->
<!-- Container with internal padding but no external padding/margin -->
<section class="bg-gray-100 py-12">
  <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Responsive Heading and Description -->
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-4">{title}</h1>
    <p class="text-base sm:text-lg lg:text-xl pt-4 text-left mb-8">{description}</p>

    <!-- Responsive grid layout without affecting other sections -->
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {#each products as product}
        <div class="border border-gray-200 rounded-lg p-4 lg:p-6 flex flex-col items-center">
          <!-- Responsive image width and height -->
          <img class="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg mb-4" src={product.imageUrl} alt={product.name} />
          <div class="text-lg sm:text-xl font-semibold">{product.name}</div>
          <div class="text-black mt-2">{getStars(product.stars)}</div>
          <div class="text-black text-lg mt-2">{product.price}</div>
        </div>
      {/each}
    </div>
  </div>
</section>


