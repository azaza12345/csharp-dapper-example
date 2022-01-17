import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly APIUrl: string = 'https://localhost:5001/api';

  constructor(private http:HttpClient) { }

  getCategoriesList():Observable<Category[]> {
    return this.http.get<any>(this.APIUrl+'/Category')
  }

  addCategory(value: Category) {
    console.log('added');
    return this.http.post(this.APIUrl+'/Category', value);
  }

  updateCategory(value: Category) {
    return this.http.put(this.APIUrl+'/Category', value);
  }

  deleteCategory(value: number) {
    return this.http.delete(this.APIUrl+'/Category/'+ value);
  }
}
