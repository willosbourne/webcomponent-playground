import React, { useEffect, useState, useRef } from 'react';
import '../components/counter/counter.js';

const App = () => {
  const [count, setCount] = useState(0);
  const counterId = 'react-counter-component';

  useEffect(() => {
    // Ensure the custom element is defined
    // This is just a safety check, as the import should handle registration
    if (!customElements.get('counter-component')) {
      console.warn('counter-component not defined yet');
    }

    const counterElement = document.getElementById(counterId);

    if (counterElement) {
      setCount(counterElement.count);

      // Add event listener for count changes in the web component
      const handleCountChange = (event) => {
        setCount(event.detail.count);
      };

      counterElement.addEventListener('countChange', handleCountChange);

      return () => {
        counterElement.removeEventListener('countChange', handleCountChange);
      };
    }
  }, []);

  const handleIncrement = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      const counterElement = document.getElementById(counterId);
      if (counterElement) {
        counterElement.count = newCount;
      }
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      const counterElement = document.getElementById(counterId);
      if (counterElement) {
        counterElement.count = newCount;
      }
      return newCount;
    });
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <counter-component id={counterId}></counter-component>

      <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
        <h2>React Counter</h2>
        <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          <button 
            onClick={handleDecrement}
            style={{ padding: '0.5rem 1rem', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#ff6b6b', color: 'white' }}
          >
            -
          </button>
          <button 
            onClick={handleIncrement}
            style={{ padding: '0.5rem 1rem', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#4ecdc4', color: 'white' }}
          >
            +
          </button>
        </div>
      </div>

      <p>This is a demonstration of the counter web component in a React application.</p>
      <p>React is used to render this container, and now both the web component and React counters are synchronized.</p>

      <a href="/" style={{ marginTop: '20px', padding: '8px 16px', backgroundColor: '#4ecdc4', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: '500' }}>Back to Home</a>
    </div>
  );
};

export default App;
