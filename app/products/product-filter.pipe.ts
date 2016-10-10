import { PipeTransform, Pipe} from 'angular2/core';
import { IWalmartProduct } from './walmarket.product.ts';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IWalmartProduct[], args: string[]): IWalmartProduct[] {
        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IWalmartProduct) =>
            product.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}