<script>
    import Button from "../button/Button.svelte";
  
    function handleClick() {
      alert("Button clicked!");
    }
  </script>
  
  <div>
    <div class="flex flex-row justify-around pb-8 items-center align-center">
      <div class="bg-cover bg-center flex pl-2 py-4 justify-center flex-col text-left h-80 w-1/2 flex-shrink-0" 
           style="background-image: url('https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg');">
        <h1 class="font-bold text-2xl text-white">Plants Care Instruction</h1>
        <p class="text-white">Each order includes a small care guide booklet.</p>
        <Button class="mt-6 w-32" on:click={handleClick}>Shop Now</Button>
      </div>
  
      <div class="bg-cover bg-center flex pl-2 py-4 justify-center flex-col text-left h-80 w-1/2 flex-shrink-0" 
           style="background-image: url('https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg');">
        <h1 class="font-bold text-2xl text-white">Plants Care Instruction</h1>
        <p class="text-white">Each order includes a small care guide booklet.</p>
        <Button class="" on:click={handleClick}>Shop Now</Button>
      </div>
    </div>
  </div>
  
  