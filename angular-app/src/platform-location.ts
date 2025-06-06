import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CustomPlatformLocation extends PlatformLocation {
  getBaseHrefFromDOM(): string {
    return '/';
  }

  onPopState(fn: any): void {
    window.addEventListener('popstate', fn);
  }

  onHashChange(fn: any): void {
    window.addEventListener('hashchange', fn);
  }

  get href(): string {
    return window.location.href;
  }

  get protocol(): string {
    return window.location.protocol;
  }

  get hostname(): string {
    return window.location.hostname;
  }

  get port(): string {
    return window.location.port;
  }

  get pathname(): string {
    return window.location.pathname;
  }

  get search(): string {
    return window.location.search;
  }

  get hash(): string {
    return window.location.hash;
  }

  pushState(state: any, title: string, url: string): void {
    window.history.pushState(state, title, url);
  }

  replaceState(state: any, title: string, url: string): void {
    window.history.replaceState(state, title, url);
  }

  forward(): void {
    window.history.forward();
  }

  back(): void {
    window.history.back();
  }

  historyGo(relativePosition: number = 0): void {
    window.history.go(relativePosition);
  }
}