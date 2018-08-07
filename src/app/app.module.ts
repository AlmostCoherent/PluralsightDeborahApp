import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './product/product-detail.guard';
import { ProductModule } from './product/product.module';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    FormModule   
  ],
  providers: [
    ProductDetailGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
