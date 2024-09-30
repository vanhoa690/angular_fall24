import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  toast = inject(HotToastService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.toast.success('Ok');
      },
      error: () => this.toast.error('Error'),
    });
  }

  handleDelete(id: string | number) {
    if (confirm('Di choi ko?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.toast.success('Delete Ok');
          location.reload();
        },
        error: () => this.toast.error('Delete Error'),
      });
    }
  }
}
