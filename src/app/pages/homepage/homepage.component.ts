import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  toast = inject(HotToastService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => this.toast.error('Error: ' + e.message),
    });
  }
}
