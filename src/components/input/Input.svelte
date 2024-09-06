<script>
  import { createEventDispatcher } from 'svelte';

  export let type = "text";
  export let value = "";
  export let placeholder = "";
  export let name = ""; // Added name prop for formData

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch('submit', { value });
  };
</script>

<div>
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    name={name}
    class="border-4 border-amber-900 align-middle p-2 rounded"
  />
  <button
    on:click={handleClick}
    class="ml-2 bg-amber-900 text-white p-2 rounded"
  >
    Show Text
  </button>
</div>
