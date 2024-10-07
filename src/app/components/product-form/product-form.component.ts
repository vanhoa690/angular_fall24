import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product, ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  @Input() btnSubmit = 'Submit';
  @Input() productId: string | null = null;
  @Output() onSubmit = new EventEmitter<Product>();

  productForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  });
  productService = inject(ProductService);
  toast = inject(HotToastService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    if (!this.productId) return;
    this.productService.getProductDetail(this.productId).subscribe({
      next: (data) => {
        this.productForm.patchValue(data);
      },
      error: () => this.toast.error('Error'),
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.productForm.value);
  }
}
