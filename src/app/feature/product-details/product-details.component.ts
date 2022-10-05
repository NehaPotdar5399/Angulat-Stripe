import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productservice.getproducts().subscribe((product)=>{
      this.product=product;
      console.log(product);
    })
  }

}
