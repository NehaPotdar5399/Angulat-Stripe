import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getproducts().subscribe((product) => {
      this.products = product[0];
      console.log(this.products)
    });
  }}
