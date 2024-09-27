import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  headers = { Authorization: 'Bearer my-token' };
  http = inject(HttpClient);
  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getDetail(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`, {
      headers: this.headers,
    });
  }
}
