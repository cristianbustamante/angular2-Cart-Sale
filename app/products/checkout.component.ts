import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IWalmartProduct } from './walmarket.product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/checkout.component.html'
})

export class CheckoutComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    
     walmartProducts: IWalmartProduct[];
     consulta:string;

    constructor(private _router: Router,private _productService: ProductService) {
    }


    ngOnInit(): void {
        this.walmartProducts = this._productService.getProductCart();
    }

    onDeleteCart(codigo:number){
        for (let product of this.walmartProducts) {
              if(codigo == product.itemId){
                 this.walmartProducts.splice(0,1);
              }
        }
    }
    
    onBack(): void {
        console.log(this.walmartProducts)
        this._router.navigate(['Products']);
    }
}