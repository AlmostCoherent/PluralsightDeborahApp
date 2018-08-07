import { Component } from "@angular/core";
import { ProductService } from "./services/ProductService";


@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{ pageTitle}}</a>
    <ul class='nav navbar-nav'>
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}