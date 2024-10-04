import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  productId: string | null = null;
  editForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  productService = inject(ProductService);
  toast = inject(HotToastService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.productService.getProductDetail(params['id']).subscribe({
        next: (data) => {
          console.log(data);
          this.editForm.patchValue(data); // update data default
        },
        error: () => this.toast.error('Error'),
      });
    });
  }

  handleSubmit() {
    // call api
    console.log(this.productId);
    if (!this.productId) return;

    this.productService
      .editProduct(this.productId, this.editForm.value)
      .subscribe({
        next: () => {
          this.toast.success('Ok');
          this.router.navigateByUrl('/admin/product/list');
        },
        error: () => this.toast.error('Error'),
      });
  }
}
