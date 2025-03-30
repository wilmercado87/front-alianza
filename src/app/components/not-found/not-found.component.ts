import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: ` <div
    class="flex items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-xl text-gray-600">Página no encontrada</p>
    </div>
  </div>`,
})
export class NotFoundComponent {}
