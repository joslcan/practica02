import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  // GET -> obtener todos los productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET -> obtener producto por ID
  getProductosById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST -> agregar producto
  addProductos(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // PUT -> actualizar producto
  updateProductos(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  // DELETE -> eliminar producto
  deleteProductos(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
