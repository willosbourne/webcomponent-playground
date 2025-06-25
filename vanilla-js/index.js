// Import the counter component
import '../components/counter/counter.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get references to elements
  const counterComponent = document.getElementById('vanilla-counter-component');
  const counterValue = document.getElementById('counter-value');
  const incrementButton = document.getElementById('increment-button');
  const decrementButton = document.getElementById('decrement-button');

  let count = 0;

  // Initialize the vanilla JS counter from the web component
  if (counterComponent) {
    count = counterComponent.count;
    updateCounterValue();
  }

  // Add event listeners to buttons
  incrementButton.addEventListener('click', () => {
    count += 1;
    updateCounterValue();
    updateWebComponent();
  });

  decrementButton.addEventListener('click', () => {
    count -= 1;
    updateCounterValue();
    updateWebComponent();
  });

  // Listen for changes in the web component
  counterComponent.addEventListener('countChange', (event) => {
    count = event.detail.count;
    updateCounterValue();
  });

  // Update the counter value display
  function updateCounterValue() {
    counterValue.textContent = count;
  }

  // Update the web component's count
  function updateWebComponent() {
    if (counterComponent) {
      counterComponent.count = count;
    }
  }

  console.log('Vanilla JS implementation loaded with two-way binding');
});
