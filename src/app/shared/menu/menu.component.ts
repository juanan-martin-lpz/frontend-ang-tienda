import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LineaPedido } from 'src/app/modelos/linea-pedido.model';
import { Usuario } from 'src/app/modelos/usuario.model';
import { AppState } from 'src/app/reducers';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public usuario: Usuario;
    public cesta: LineaPedido[];

    constructor(
        private store: Store<AppState>,
        private router: Router
    ) {

        this.store.select('usuario').subscribe(({ usuario }) => {
            this.usuario = usuario;
        });

        this.store.select('cesta').subscribe(({ articulos }) => this.cesta = articulos);

    }

    ngOnInit(): void {
    }

    profile(): void {
        if (this.usuario) {
            this.router.navigateByUrl('usuarios/profile');
        }
        else {
            this.router.navigateByUrl('usuarios/login');
        }
    }
}
