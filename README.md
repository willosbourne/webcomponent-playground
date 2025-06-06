# Web Component Playground

This project demonstrates how to create and use a web component across different frontend frameworks. It includes a simple counter component implemented in:

- Vanilla JavaScript
- React
- Svelte
- Angular

## Project Structure

```
webcomponent-playground/
├── components/
│   └── counter/
│       └── counter.js       # The shared counter web component
├── vanilla-js/
│   ├── index.html           # Vanilla JS implementation
│   └── index.js
├── react-app/
│   ├── index.html           # React implementation
│   ├── index.jsx
│   └── App.jsx
├── svelte-app/
│   ├── index.html           # Svelte implementation
│   ├── main.js
│   └── App.svelte
├── angular-app/
│   ├── index.html           # Angular implementation
│   └── src/
│       ├── main.ts
│       ├── app.component.ts
│       └── app.module.ts
├── vite.config.js           # Vite configuration
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd webcomponent-playground
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Applications

### All Implementations at Once

To run all implementations at once:

```
npm start
```

This will start the Vite dev server with all implementations available.

### Vanilla JavaScript Implementation

To run only the Vanilla JavaScript implementation:

```
npm run start:vanilla
```

### React Implementation

To run only the React implementation:

```
npm run start:react
```

### Svelte Implementation

To run only the Svelte implementation:

```
npm run start:svelte
```

### Angular Implementation

To run only the Angular implementation:

```
npm run start:angular
```

## Building for Production

### All Implementations

To build all implementations:

```
npm run build
```

### Individual Implementations

To build specific implementations:

```
npm run build:vanilla
npm run build:react
npm run build:svelte
npm run build:angular
```

## How It Works

The project uses a single web component (`counter-component`) defined in `components/counter/counter.js`. This component is then imported and used in different frontend frameworks:

1. **Vanilla JS**: Directly imports and uses the web component.
2. **React**: Wraps the web component in a React component.
3. **Svelte**: Wraps the web component in a Svelte component.
4. **Angular**: Wraps the web component in an Angular component using CUSTOM_ELEMENTS_SCHEMA.

Each implementation demonstrates how to integrate web components with different frontend frameworks while maintaining the component's functionality across all platforms.

## Technologies Used

- Web Components (Custom Elements)
- React
- Svelte
- Angular
- Vite (for building and development)

## License

This project is licensed under the "THE BEER-WARE LICENSE" (Revision 42):

As long as you retain the license notice, you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer in return.

See the [LICENSE](LICENSE) file for details.
