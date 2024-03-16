import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Book Management App</a>
      </div>
    </nav>
  `,
  styles: ``
})
export class NavbarComponent {

}
