import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container" style="display: flex; flex-direction: column; align-items: center;">
      <!-- Using the web component in Angular -->
      <counter-component id="angular-counter-component"></counter-component>

      <div style="margin: 20px 0; padding: 20px; background-color: #f0f0f0; border-radius: 8px; text-align: center;">
        <h2>Angular Counter</h2>
        <div style="font-size: 2rem; margin: 1rem 0;">{{ count }}</div>
        <div style="display: flex; justify-content: center; gap: 0.5rem;">
          <button 
            (click)="handleDecrement()"
            style="padding: 0.5rem 1rem; font-size: 1rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff6b6b; color: white;"
          >
            -
          </button>
          <button 
            (click)="handleIncrement()"
            style="padding: 0.5rem 1rem; font-size: 1rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4ecdc4; color: white;"
          >
            +
          </button>
        </div>
      </div>

      <p>This is a demonstration of the counter web component in an Angular application.</p>
      <p>Angular is used to render this container, and now both the web component and Angular counters are synchronized.</p>

      <a href="/" style="margin-top: 20px; padding: 8px 16px; background-color: #4ecdc4; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">Back to Home</a>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  count = 0;
  private counterId = 'angular-counter-component';
  private counterElement: HTMLElement | null = null;
  private countChangeListener: ((event: Event) => void) | null = null;

  ngOnInit() {
    // Ensure the custom element is defined
    // This is just a safety check, as the import should handle registration
    if (!customElements.get('counter-component')) {
      console.warn('counter-component not defined yet');
    }

    // Get reference to the web component
    this.counterElement = document.getElementById(this.counterId);

    if (this.counterElement) {
      // Initialize Angular state from web component
      this.count = (this.counterElement as any).count;

      // Add event listener for count changes in the web component
      this.countChangeListener = (event: Event) => {
        const customEvent = event as CustomEvent;
        this.count = customEvent.detail.count;
      };

      this.counterElement.addEventListener('countChange', this.countChangeListener);
    }
  }

  ngOnDestroy() {
    // Clean up event listener when component is destroyed
    if (this.counterElement && this.countChangeListener) {
      this.counterElement.removeEventListener('countChange', this.countChangeListener);
    }
  }

  handleIncrement() {
    this.count += 1;
    this.updateWebComponent();
  }

  handleDecrement() {
    this.count -= 1;
    this.updateWebComponent();
  }

  updateWebComponent() {
    if (this.counterElement) {
      (this.counterElement as any).count = this.count;
    }
  }
}
