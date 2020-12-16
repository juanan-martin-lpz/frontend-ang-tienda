import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto.model';
import { pluck } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class CatalogoService {

    constructor(private _http: HttpClient) { }

    public getProductos(): Observable<any> {

        console.log('Qury database');

        return this._http.get('http://localhost:3000/productos');
    }
}
