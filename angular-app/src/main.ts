import 'zone.js'; // Required for Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// Import the counter component to ensure it's registered
import '../../components/counter/counter.js';

// Bootstrap the Angular application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
