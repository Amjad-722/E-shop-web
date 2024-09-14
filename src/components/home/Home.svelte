<script>
  import Button from "../button/Button.svelte";

  function handleClick() {
    alert("Button clicked!");
  }
</script>

<main
  class="flex flex-col justify-center items-center h-screen text-center p-4"
>
  <p class="text-2xl text-white font-bold mb-6 max-w-lg pt-6">
    The Boutique Store For Plants!
  </p>

  <h1 class="text-8xl  text-white font-bold mb-4 pt-6">
    Everything Is Better
    <br />
  </h1>
  <h1 class="text-8xl text-white font-bold mb-4 pt-6">With Plants</h1>

  <Button className="mt-6 hover:text-black" on:click={handleClick}>Shop Now</Button>
</main>
