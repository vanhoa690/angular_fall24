import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Product | null = null;
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProductDetail('2').subscribe({
      next: (data) => (this.product = data),
      error: () => {},
    });
  }
}
