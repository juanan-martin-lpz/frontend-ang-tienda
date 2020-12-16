import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';

import { IncrementarCesta, DecrementarCesta, VaciarCesta, GuardarCesta, QuitarDeCesta } from '../../actions/cesta.actions';

import { LineaPedido } from '../../modelos/linea-pedido.model';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    public items: LineaPedido[];
    public total_cesta: number;
    public usuario: Usuario;

    constructor(private store: Store<AppState>) {

        this.store.select('cesta').subscribe(({ articulos, total_cesta }) => {
            this.items = articulos;
            this.total_cesta = total_cesta;
        });

        this.store.select('usuario').subscribe(({ usuario }) => this.usuario = usuario);
    }

    ngOnInit(): void {
    }

    incrementar(item: LineaPedido): void {
        this.store.dispatch(new IncrementarCesta({ producto: item }));
    }

    decrementar(item: LineaPedido): void {
        this.store.dispatch(new DecrementarCesta({ producto: item }));
    }

    quitar(item: LineaPedido): void {
        this.store.dispatch(new QuitarDeCesta({ producto: item }));
    }

    guardarCesta(): void {
        this.store.dispatch(new GuardarCesta({ user: this.usuario._id, cesta: this.items }))
    }

}
