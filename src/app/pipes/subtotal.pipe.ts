import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Pipe({
  name: 'subtotal',
  standalone: true
})
export class SubtotalPipe implements PipeTransform {

  transform(item: CartItem): number {
    return item.product.price * item.quantity;
  }
}