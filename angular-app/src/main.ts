// These imports need to be in this specific order
import 'zone.js'; // Required for Angular

// Force load the compiler before anything else
import * as compiler from '@angular/compiler';
import '@angular/compiler'; // Ensure the compiler is loaded
window['@angular/compiler'] = compiler; // Make compiler globally available

// Standard imports
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlatformLocation } from '@angular/common';
import { AppModule } from './app.module';
import { CustomPlatformLocation } from './platform-location';

// Import the counter component to ensure it's registered
import '../../components/counter/counter.js';

// Bootstrap the Angular application with JIT compilation
platformBrowserDynamic([
  // Explicitly provide the compiler
  { provide: compiler.Compiler, useFactory: () => new compiler.Compiler() },
  // Provide our custom PlatformLocation implementation
  { provide: PlatformLocation, useClass: CustomPlatformLocation }
]).bootstrapModule(AppModule)
.catch(err => console.error(err));
