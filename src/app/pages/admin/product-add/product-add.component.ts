import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { ProductFormComponent } from '../../../components/product-form/product-form.component';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);

  handleSubmit(values: Product) {
    this.productService.addProduct(values).subscribe({
      next: () => {
        this.toast.success('Add Product');
        this.router.navigateByUrl('/admin/product/list');
      },
      error: () => {
        this.toast.error('Error');
      },
    });
  }
}
