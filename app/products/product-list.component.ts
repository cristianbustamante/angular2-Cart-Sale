import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { IWalmartProduct } from './walmarket.product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { CheckoutComponent } from './checkout.component';
import {ProductsCartServices} from './checkout-products';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    errorMessage: string;
    
    walmartProducts: IWalmartProduct[];
    
    
    constructor(private _productService: ProductService) {
        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this._productService.getProductswalmart("5426")
            .subscribe(products => this.walmartProducts = products.items,
                        error => this.errorMessage = <any>error);
    }

    getProductsCategory(category:string){
        this._productService.getProductswalmart(category)
            .subscribe(products => this.walmartProducts = products.items,
                        error => this.errorMessage = <any>error);
    }
    
    onAddCart(codigo: number): void {
        this.getProducto(codigo);      
    }

    getProducto(codigo:number){
        for (let product of this.walmartProducts) {
              if(codigo == product.itemId){
                 this._productService.addToCart(product);
              }
        }
    }
}