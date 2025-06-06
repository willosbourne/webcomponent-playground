import React, { useEffect } from 'react';
import '../components/counter/counter.js';

// This component wraps our web component for use in React
const App = () => {
  useEffect(() => {
    // Ensure the custom element is defined
    // This is just a safety check, as the import should handle registration
    if (!customElements.get('counter-component')) {
      console.warn('counter-component not defined yet');
    }
  }, []);

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Using the web component in React */}
      <counter-component></counter-component>
      
      <p>This is a demonstration of the counter web component in a React application.</p>
      <p>React is used to render this container, but the counter itself is a web component.</p>
    </div>
  );
};

export default App;