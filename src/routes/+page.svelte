<script>
  import Input from '../components/Input.svelte';

  let inputValue = "";
  let displayedText = "";

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    console.log([...formData]); 

    displayedText = formData.get('inputField'); 
    event.target.reset(); 
  };
</script>

<main class="p-4">
  <h1 class="text-2xl font-bold mb-4">Click to Display Input Text</h1>
  <form on:submit={handleSubmit}>
    <Input 
      placeholder="Enter text here"
      bind:value={inputValue}
      name="inputField" 
    />
   
  </form>
  {#if displayedText}
    <p class="mt-4 text-lg">You entered: {displayedText}</p>
  {/if}
</main>
