import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  toast = inject(HotToastService);

  product: Product | undefined;
  productService = inject(ProductService);
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productService.getDetail(param['id']).subscribe({
        next: (data) => {
          this.toast.success('oh Yeah');
          this.product = data;
        },
        error: (e) => {
          this.toast.error('Error: ' + e.message);
        },
      });
    });
  }
}
