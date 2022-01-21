import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {Category} from "../../models/category";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  @Input() product!: Product;
  ProductId: number = 0;
  ProductName: string = '';
  ProductPrice: number = 0;
  ProductDescription: string = '';
  ProductCategory!: Category;

  CategoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoriesList().subscribe((data:Category[]) => {
      this.CategoryList = data;

      this.ProductId = this.product.id;
      this.ProductName = this.product.name;
      this.ProductPrice = this.product.price;
      this.ProductDescription = this.product.description;

      this.ProductCategory = this.product.category;
    });
  }

  updateProduct() {
    let updatedProduct: Product = {
      id: this.ProductId,
      name: this.ProductName,
      price: this.ProductPrice,
      description: this.ProductDescription,
      category: this.ProductCategory
    };

    this.productService.updateProduct(updatedProduct).subscribe(
      result => {
        alert(result.toString());
      }
    );
  }

  addProduct() {
    let newProduct: Product = {
      id: this.ProductId,
      name: this.ProductName,
      price: this.ProductPrice,
      description: this.ProductDescription,
      category: this.ProductCategory
    };

    this.productService.addProduct(newProduct).subscribe(
      result => {
        alert(result.toString());
      }
    );
  }
}
