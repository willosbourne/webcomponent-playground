<script>
  import { onMount } from 'svelte';
  import '../components/counter/counter.js';

  let count = 0;
  const counterId = 'svelte-counter-component';

  function handleIncrement() {
    count += 1;
    updateWebComponent();
  }

  function handleDecrement() {
    count -= 1;
    updateWebComponent();
  }

  function updateWebComponent() {
    const counterElement = document.getElementById(counterId);
    if (counterElement) {
      counterElement.count = count;
    }
  }

  onMount(() => {
    // Ensure the custom element is defined
    // This is just a safety check, as the import should handle registration
    if (!customElements.get('counter-component')) {
      console.warn('counter-component not defined yet');
    }

    const counterElement = document.getElementById(counterId);
    if (counterElement) {
      // Initialize Svelte state from web component
      count = counterElement.count;

      // Add event listener for count changes in the web component
      const handleCountChange = (event) => {
        count = event.detail.count;
      };

      counterElement.addEventListener('countChange', handleCountChange);

      return () => {
        counterElement.removeEventListener('countChange', handleCountChange);
      };
    }
  });
</script>

<div class="app-container">
  <!-- Using the web component in Svelte -->
  <counter-component id={counterId}></counter-component>

  <div class="svelte-counter">
    <h2>Svelte Counter</h2>
    <div class="counter-value">{count}</div>
    <div class="counter-buttons">
      <button class="decrement-button" on:click={handleDecrement}>-</button>
      <button class="increment-button" on:click={handleIncrement}>+</button>
    </div>
  </div>

  <p>This is a demonstration of the counter web component in a Svelte application.</p>
  <p>Svelte is used to render this container, and now both the web component and Svelte counters are synchronized.</p>

  <a href="/" class="back-button">Back to Home</a>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .svelte-counter {
    margin: 20px 0;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    text-align: center;
  }

  .counter-value {
    font-size: 2rem;
    margin: 1rem 0;
  }

  .counter-buttons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .decrement-button, .increment-button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .decrement-button {
    background-color: #ff6b6b;
    color: white;
  }

  .increment-button {
    background-color: #4ecdc4;
    color: white;
  }

  .back-button {
    margin-top: 20px;
    padding: 8px 16px;
    background-color: #4ecdc4;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
  }

  .back-button:hover {
    background-color: #3dbdb4;
  }
</style>
