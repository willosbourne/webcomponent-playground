import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container" style="display: flex; flex-direction: column; align-items: center;">
      <!-- Using the web component in Angular -->
      <counter-component></counter-component>
      
      <p>This is a demonstration of the counter web component in an Angular application.</p>
      <p>Angular is used to render this container, but the counter itself is a web component.</p>
    </div>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Ensure the custom element is defined
    // This is just a safety check, as the import should handle registration
    if (!customElements.get('counter-component')) {
      console.warn('counter-component not defined yet');
    }
  }
}