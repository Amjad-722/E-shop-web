<script>
    
   
    export let disabled = false; 
    export let className = '';   
  </script>
  
  
  <button
    
    class={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    on:click  
  >
    <slot></slot> 
  </button>
  