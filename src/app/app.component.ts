import { Component } from "@angular/core";
import { ProductService } from "./services/ProductService";


@Component({
  selector: 'pm-root',
  template: `
  <div class="container">
    <nav id="navbar" class="navbar navbar-expand bg-light">
      <a class="navbar-brand">{{ pageTitle}}</a>
      <ul class='nav navbar-nav list-inline'>
        <li style="padding-right: 15px;"><a [routerLink]="['/welcome']">Home</a></li>
        <li style="padding-right: 15px;"><a [routerLink]="['/products']">Product List</a></li>
        <li style="padding-right: 15px;"><a [routerLink]="['/form']">Form</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}