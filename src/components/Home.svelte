<script>
  import Button from "./Button.svelte";

    
    function handleClick() {
      alert('Button clicked!');
    }
  </script>
  
  <main class="flex flex-col justify-center items-center h-screen text-center p-4">
    <p class="text-lg text-white font-medium mb-6 max-w-lg pt-6">
      The Boutique Store For Plants!
    </p>
    
    <h1 class="text-7xl text-white font-bold mb-4 pt-6">
      Everything Is Better  
      <br>
      
    </h1>
    <h1 class="text-7xl text-white font-bold mb-4 pt-6">With Plants</h1>
    
    <Button className="mt-6" on:click={handleClick}>Learn More</Button>
</main>
  
  
 