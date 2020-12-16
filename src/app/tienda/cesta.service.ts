import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineaPedido } from '../modelos/linea-pedido.model';

@Injectable({
    providedIn: 'root'
})
export class CestaService {

    constructor(private _http: HttpClient) { }

    saveCesta(userid: string, cesta: LineaPedido[]): Observable<any> {

        return this._http.put(`http://localhost:3000/usuarios/${userid}/cesta`, cesta);
    }
}
