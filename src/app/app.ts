  import { Component } from '@angular/core';

  import { ProductListComponent } from './components/product-list/product-list.component';
  import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      ProductListComponent,
      CartSummaryComponent
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
  })
  
  export class App {}