<script>
    
   
    export let disabled = false; 
    export let className = '';   
  </script>
  
  
  <button
    
    class={`px-4 py-2 bg-green-500 hover:bg-white text-white hover:text-black border-2 hover:border-gray-500 font-semibold  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    on:click  
  >
    <slot></slot> 
  </button>
  