import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFormComponent } from '../../../components/product-form/product-form.component';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  productId: string | null = null;

  productService = inject(ProductService);
  toast = inject(HotToastService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }

  handleSubmit(values: Product) {
    // call api
    if (!this.productId) return;

    this.productService.editProduct(this.productId, values).subscribe({
      next: () => {
        this.toast.success('Ok');
        this.router.navigateByUrl('/admin/product/list');
      },
      error: () => this.toast.error('Error'),
    });
  }
}
