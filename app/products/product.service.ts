import { Injectable } from 'angular2/core';
import { IWalmartCategory } from './walmarket.category';
import { Http, Response ,Headers,RequestOptions,HTTP_PROVIDERS} from 'angular2/http';
import { IWalmartProduct } from './walmarket.product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    private _productUrlWalmart='api/products/';
    private _productUrlWalmar='http://api.walmartlabs.com/v1/search';
    
    public walmartProducts: IWalmartProduct[] = [];

    constructor(private _http: Http) {
        
    }
    
    addToCart(walmartProduct : IWalmartProduct ):void{
        this.walmartProducts.push(walmartProduct);
    }


    getProductCart():IWalmartProduct[]{
      return this.walmartProducts;
    }

     getProductswalmart(category : string): Observable<IWalmartCategory> {
        let body = JSON.stringify({ "query":"ipod","format":"json","categoryId":"5440_1001299","apiKey":"q69mkth9dbch5nnysnu25dju "});
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
                                     'Access-Control-Allow-Origin': '*',
                                     'Access-Control-Allow-Headers': 'X-Requested-With' ,
                                     'Access-Control-Allow-Methods': "PUT, GET, POST, DELETE, OPTIONS" ,
                                 });
        this._productUrlWalmart = this._productUrlWalmart.concat(category+".json");
        let options = new RequestOptions({ headers: headers, method: "GET" });
        return this._http.get("api/products/"+category+".json",RequestOptions)
        .map((response: Response) => <IWalmartCategory>response.json())
        .do(response => console.log(response));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}