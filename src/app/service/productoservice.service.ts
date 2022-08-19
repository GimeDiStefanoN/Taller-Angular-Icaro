import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productmodel } from '../productmodel';


@Injectable({
  providedIn: 'root'
})
export class ProductoserviceService {

  private URL: string ='https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient
  ) { }

getProductos():Observable<Productmodel[]>{
  return this.http.get<Productmodel[]>(this.URL);
}  
}
