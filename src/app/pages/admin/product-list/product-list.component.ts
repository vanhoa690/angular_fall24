import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productService = inject(ProductService);
  toast = inject(HotToastService);

  products: Product[] = [];

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.toast.success('Yeah!!');
        this.products = data;
      },
      error: (e) => {
        console.log(e);
        this.toast.error(e.message);
      },
    });
  }

  handleDeleteProduct(id: number) {
    if (window.confirm('Xoa')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          window.location.reload();
          this.toast.success('Delete Successfull!!');
        },
        error: (e) => {
          console.log(e);
          this.toast.error(e.message);
        },
      });
    }
  }
}
