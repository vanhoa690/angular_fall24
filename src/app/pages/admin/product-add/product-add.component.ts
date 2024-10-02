import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    title: new FormControl('', [
      // Validators.required,
      // Validators.minLength(10), // so ky tu > 6
      // Validators.min(1), // price > 0
    ]),
    // image
    // price
    // category
  });

  // get title() {
  //   return this.addForm.get('title');
  // }

  productService = inject(ProductService);
  toast = inject(HotToastService);
  router = inject(Router);

  handleSubmit() {
    // call api
    this.productService.addProduct(this.addForm.value).subscribe({
      next: () => {
        this.toast.success('Add Ok');
        this.router.navigateByUrl('/admin/product/list');
      },
      error: () => this.toast.error('Error'),
    });
  }
}
