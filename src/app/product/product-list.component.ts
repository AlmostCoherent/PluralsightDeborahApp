import { Component } from "@angular/core";
import { IProduct } from "./product";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ProductService } from "../services/ProductService";


@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
    implements OnInit {    

    constructor(private _productService: ProductService) {
    }

    basePageTitle: string = 'Product List'
    pageTitle: string = this.basePageTitle;
    imageWidth: number = 50;
    imageMargin: number = 50;
    showImage: boolean = false;
    errorMessage: string = '';
    //listFilter: string = 'cart';

    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = (this.listFilter ? this.performFilter(this.listFilter) : this.products);
    }
    filteredProducts: IProduct[];
    products: IProduct[];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => 
            {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = this.basePageTitle + ": " + message;
    }

}