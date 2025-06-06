<script>
  import { onMount } from 'svelte';
  import '../components/counter/counter.js';

  onMount(() => {
    // Ensure the custom element is defined
    // This is just a safety check, as the import should handle registration
    if (!customElements.get('counter-component')) {
      console.warn('counter-component not defined yet');
    }
  });
</script>

<div class="app-container">
  <!-- Using the web component in Svelte -->
  <counter-component></counter-component>
  
  <p>This is a demonstration of the counter web component in a Svelte application.</p>
  <p>Svelte is used to render this container, but the counter itself is a web component.</p>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>