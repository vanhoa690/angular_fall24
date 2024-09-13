import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
