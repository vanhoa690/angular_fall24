import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // getAll
  // add
  http = inject(HttpClient); // http ~ axios (get, post, delete ....)

  getAll() {
    return this.http.get('http://localhost:3000/products');
  }
  //addProduct
}
