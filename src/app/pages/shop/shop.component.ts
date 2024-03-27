import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
  <app-product-list title="Bесплатные" subtitle="Pоставить галочку в резюме" [products]="products.byGroup['skill']" />
  <app-product-list title="Nнтенсив" subtitle=" Dля реального опыта" [products]="products.byGroup['intensive']" />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
  }

}
