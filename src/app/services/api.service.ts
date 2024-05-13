import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _httpClient = inject(HttpClient);
  private baseUrl = 'https://fakestoreapi.com/products';
  getProducts() {
    return this._httpClient.get<IProduct[]>(this.baseUrl);
  }

  getProductById(id: number) {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }
}
