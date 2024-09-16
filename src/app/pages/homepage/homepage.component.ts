import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAll().subscribe((data) => (this.products = data));
  }
}
