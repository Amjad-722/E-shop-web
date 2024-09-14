<script>
  import Card from "../components/card/Card.svelte";
  import FeaturedProducts from "../components/featured Products/Featured Products.svelte";
  import Footer from "../components/footer/footer.svelte";
  import Help from "../components/help/Help.svelte";
  import PlantsShop from "../components/help/plantsShop.svelte";
import Home from "../components/home/Home.svelte";
  import HomeChild from "../components/HomeChild.svelte";
import Navbar from "../components/Navbar/Navbar.svelte";
  import Testimonial from "../components/testimonial/testimonial.svelte";

</script>
<main>
  <section class="h-screen max-h-full bg-cover  bg-center" style="background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-some-green-plants-and-leaves-against-a-dark-background-image_2899643.jpg');">
    <Navbar />
    <Home/>
  </section>
  <section class="">
    <HomeChild/>
  </section>
  <section >
    <Card/>
  </section>
  <section >
    <FeaturedProducts/>
  </section>
  <section >
    <Help/>
    <PlantsShop/>
  </section>
  <section>
    <Testimonial/>
  </section>
<section>
  <Footer/>
</section>
  
  
  
  
</main>