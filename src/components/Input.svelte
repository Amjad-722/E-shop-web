<script>
    import { createEventDispatcher } from 'svelte';
  
    export let type = "text";
    export let value = "";
    export let placeholder = "";
  
    const dispatch = createEventDispatcher();
  
    const handleClick = () => {
      dispatch('click', { value });
    };
  
    const handleInput = (event) => {
      value = event.target.value;
    };
  </script>
  
  <div>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      on:input={handleInput}
      class="border-4 border-amber-900 align-middle p-2 rounded"
    />
    <button
      on:click={handleClick}
      class="ml-2 bg-amber-900 text-white p-2 rounded"
    >
      Show Text
    </button>
  </div>