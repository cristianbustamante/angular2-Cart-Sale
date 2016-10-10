System.register(['angular2/core', 'angular2/router', './product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1;
    var CheckoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            CheckoutComponent = (function () {
                function CheckoutComponent(_router, _productService) {
                    this._router = _router;
                    this._productService = _productService;
                    this.pageTitle = 'Product Detail';
                }
                CheckoutComponent.prototype.ngOnInit = function () {
                    this.walmartProducts = this._productService.getProductCart();
                };
                CheckoutComponent.prototype.onDeleteCart = function (codigo) {
                    for (var _i = 0, _a = this.walmartProducts; _i < _a.length; _i++) {
                        var product = _a[_i];
                        if (codigo == product.itemId) {
                            this.walmartProducts.splice(0, 1);
                        }
                    }
                };
                CheckoutComponent.prototype.onBack = function () {
                    console.log(this.walmartProducts);
                    this._router.navigate(['Products']);
                };
                CheckoutComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/checkout.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
                ], CheckoutComponent);
                return CheckoutComponent;
            }());
            exports_1("CheckoutComponent", CheckoutComponent);
        }
    }
});
//# sourceMappingURL=checkout.component.js.map