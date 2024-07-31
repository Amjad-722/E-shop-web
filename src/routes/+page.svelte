<script>
    import Input from '../components/Input.svelte';
  
    let displayedText = "";
  
    const handleClick = (event) => {
      displayedText = event.detail.value;
    };
  </script>
  
  <main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Click to Display Input Text</h1>
    <Input placeholder="Enter text here" on:click={handleClick} />
    {#if displayedText}
      <p class="mt-4 text-lg">{displayedText}</p>
    {/if}
  </main>
  