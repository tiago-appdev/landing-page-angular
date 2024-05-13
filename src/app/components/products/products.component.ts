import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private _apiService = inject(ApiService);
  productsList: IProduct[] = [];

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((products: IProduct[]) => {
      this.productsList = products;
    });
  }
}
