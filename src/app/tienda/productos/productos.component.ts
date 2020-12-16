import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Producto } from '../../modelos/producto.model';
import { LineaPedido } from '../../modelos/linea-pedido.model';
import { ProductoVenta } from '../../modelos/producto-venta.model';


import { AppState } from '../../reducers/index';
import { CargarProductos } from '../../actions/catalogo.actions';
import { AniadirACesta, IncrementarCesta, QuitarDeCesta } from '../../actions/cesta.actions';


@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    public productos: Producto[];
    public cesta: LineaPedido[];

    constructor(private store: Store<AppState>) {

        this.store.select('catalogo').subscribe(({ productos }) => {

            this.productos = productos;
        });

        this.store.select('cesta').subscribe(({ articulos }) => {

            this.cesta = articulos;
        });

        this.store.dispatch(new CargarProductos());
    }

    ngOnInit(): void {
    }

    aniadirProducto(producto: Producto): void {

        let p = this.cesta.find((e) => e.articulo._id == producto._id) || null;

        if (p != null) {
            this.store.dispatch(new IncrementarCesta({ producto: p }));
            return;
        }

        const item = this.crearItemCesta(producto);

        this.store.dispatch(new AniadirACesta({ producto: item }));
    }


    private crearItemCesta(producto: Producto): LineaPedido {

        return {
            articulo: {
                _id: producto._id,
                referencia: producto.referencia,
                fabricante: producto.fabricante,
                imagen: producto.imagen,
                precio: producto.precio,
                nombre: producto.nombre
            },
            cantidad: 1,
            descuento_linea: 0,
            total_linea: producto.precio
        };
    }

}
