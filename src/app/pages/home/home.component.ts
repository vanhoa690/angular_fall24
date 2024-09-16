import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
}
