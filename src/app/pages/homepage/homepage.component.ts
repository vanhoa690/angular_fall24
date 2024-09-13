import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  // React: getProductss: useEffect
  //Angular: getProduct: ngOnInit
  // goi serivces
  // call api
  // thanh cong: fill data
  // error: show error
  products: Product[] = [];
}
