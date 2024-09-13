<script>
    import Button from "../button/Button.svelte";
  
    function handleClick() {
      alert("Button clicked!");
    }
  </script>
  
  <div>
    <div class="flex flex-row justify-around pb-8 px-10 items-center align-center">
      <!-- First Background Section -->
      <div class="relative bg-cover bg-center flex py-4 justify-center flex-col text-left h-80 w-1/2 flex-shrink-0"
           style="background-image: url('https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg');">
        
        <!-- Dark overlay for background -->
        <div class="absolute inset-0 bg-black opacity-50"></div>
  
        <!-- Content goes above the overlay -->
        <div class="relative z-10 pl-16">
          <h1 class="font-bold text-2xl py-2 text-white">Plants Care Instruction</h1>
          <p class="text-white pb-2 ">Each order includes a small care guide booklet.</p>
          <Button class="mt-6 pt-2 px-4" on:click={handleClick}>Shop Now</Button>
        </div>
      </div>
  
      <!-- Second Background Section -->
      <div class="relative bg-cover bg-center flex py-4 justify-center flex-col text-left h-80 w-1/2 flex-shrink-0"
           style="background-image: url('https://www.saferbrand.com/media/Articles/Safer-Brand/26-best-indoor-plants.jpg');">
        
        <!-- Dark overlay for background -->
        <div class="absolute inset-0 bg-black opacity-50"></div>
  
        <!-- Content goes above the overlay -->
        <div class="relative z-10 pl-16">
          <h1 class="font-bold text-2xlpy-2 text-white">Plants Care Instruction</h1>
          <p class="text-white pb-2">Each order includes a small care guide booklet.</p>
          <Button class="mt-6 px-4" on:click={handleClick}>Shop Now</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex  flex-col items-center">
    <h1 class="font-extrabold text-5xl py-10  text-center">Buy Online Now & Get 10% Off!</h1>
    <p class="text-gray-500 pb-10" >Curae quia enim aute, consequatur, eius quaerat excepteur fames pharetra.</p>
    <Button class="mt-6 px-4" on:click={handleClick}>Available Now</Button>
  </div>

  
  
  