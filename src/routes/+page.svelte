<script>
  import Card from "../components/card/Card.svelte";
  import FeaturedProducts from "../components/featured Products/Featured Products.svelte";
import Home from "../components/home/Home.svelte";
  import HomeChild from "../components/HomeChild.svelte";
import Navbar from "../components/Navbar/Navbar.svelte";

</script>
<main>
  <section class="h-screen max-h-full bg-cover  bg-center" style="background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-some-green-plants-and-leaves-against-a-dark-background-image_2899643.jpg');">
    <Navbar />
    <Home/>
  </section>
  <section class="">
    <HomeChild/>
  </section>
  <section class="h-[400px]  ">
    <Card/>
  </section>
  <section class="h-[200px] ">
    <FeaturedProducts/>
  </section>
    

  
  
  
  
</main>