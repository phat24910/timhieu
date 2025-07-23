import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private API = 'http://localhost:3000/products';

  public port = '5000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  add(p: Product): Observable<Product> {
    return this.http.post<Product>(this.API, p);
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}


