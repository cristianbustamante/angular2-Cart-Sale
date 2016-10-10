import { IWalmartProduct } from './walmarket.product';

export interface IWalmartCategory {
     query:string;
     items:IWalmartProduct[];
}