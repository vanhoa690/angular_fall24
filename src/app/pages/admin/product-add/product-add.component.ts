import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  addForm: FormGroup = new FormGroup({
    title: new FormControl(),
  });

  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);

  handleSubmit() {
    // call api
    this.productService.addProduct(this.addForm.value).subscribe({
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
