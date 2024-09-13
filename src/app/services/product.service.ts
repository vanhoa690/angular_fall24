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
  http = inject(HttpClient);
  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
