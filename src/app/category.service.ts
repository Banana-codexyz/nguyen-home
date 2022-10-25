import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from './category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  public getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiServerUrl}/category/getAll`);
  }

  public addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(`${this.apiServerUrl}/category/add`,category);
  }

  public updateCategory(category: Category): Observable<Category>{
    return this.http.put<Category>(`${this.apiServerUrl}/category/update`,category);
  }

  public deleteCategory(categoryId: number): Observable<void>{
    return this.http.get<void>(`${this.apiServerUrl}/category/delete/${categoryId}`);
  }
}
