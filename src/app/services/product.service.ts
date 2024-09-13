import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // getAll
  // getDetail
  // add
  // edit
  // delete
  http = inject(HttpClient);

  getAll() {
    return this.http.get('http://localhost:3000/products');
  }
}
