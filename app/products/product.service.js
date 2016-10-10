System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ProductService = (function () {
                function ProductService(_http) {
                    this._http = _http;
                    this._productUrl = 'api/products/products.json';
                    this._productUrlWalmart = 'api/products/';
                    this._productUrlWalmar = 'http://api.walmartlabs.com/v1/search';
                    this.walmartProducts = [];
                }
                ProductService.prototype.addToCart = function (walmartProduct) {
                    this.walmartProducts.push(walmartProduct);
                };
                ProductService.prototype.getProductCart = function () {
                    return this.walmartProducts;
                };
                ProductService.prototype.getProductswalmart = function (category) {
                    var body = JSON.stringify({ "query": "ipod", "format": "json", "categoryId": "5440_1001299", "apiKey": "q69mkth9dbch5nnysnu25dju " });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'X-Requested-With',
                        'Access-Control-Allow-Methods': "PUT, GET, POST, DELETE, OPTIONS",
                    });
                    this._productUrlWalmart = this._productUrlWalmart.concat(category + ".json");
                    var options = new http_1.RequestOptions({ headers: headers, method: "GET" });
                    return this._http.get("api/products/" + category + ".json", http_1.RequestOptions)
                        .map(function (response) { return response.json(); })
                        .do(function (response) { return console.log(response); });
                };
                ProductService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map