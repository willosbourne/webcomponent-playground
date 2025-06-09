class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._count = 0;
    this.attachShadow({ mode: 'open' });
  }

  // Getter and setter for count property
  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.updateCounter();
    this.dispatchCountChangeEvent();
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  // Dispatch custom event when count changes
  dispatchCountChangeEvent() {
    const event = new CustomEvent('countChange', {
      detail: { count: this._count },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
          text-align: center;
          margin: 2rem auto;
          max-width: 300px;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
        }
        .counter {
          font-size: 2rem;
          margin: 1rem 0;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .decrement {
          background-color: #ff6b6b;
          color: white;
        }
        .increment {
          background-color: #4ecdc4;
          color: white;
        }
        button:hover {
          opacity: 0.9;
        }
      </style>
      <div>
        <h2>Counter</h2>
        <div class="counter">${this.count}</div>
        <div class="buttons">
          <button class="decrement">-</button>
          <button class="increment">+</button>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const decrementButton = this.shadowRoot.querySelector('.decrement');
    const incrementButton = this.shadowRoot.querySelector('.increment');

    decrementButton.addEventListener('click', () => {
      this.count = this.count - 1;
    });

    incrementButton.addEventListener('click', () => {
      this.count = this.count + 1;
    });
  }

  updateCounter() {
    const counterElement = this.shadowRoot.querySelector('.counter');
    counterElement.textContent = this.count;
  }
}

// Define the custom element
customElements.define('counter-component', CounterComponent);

// Export the class for potential use in other frameworks
export default CounterComponent;
