import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  product?: IProduct;

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params) => {
        this._apiService.getProductById(Number(params['id'])).subscribe({
          next: (product) => {
            this.product = product;
          },
          error: (error) => console.log(error),
        });
      },
    });
  }
}
