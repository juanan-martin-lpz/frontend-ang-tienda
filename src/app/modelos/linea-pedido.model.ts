import { ProductoVenta } from './producto-venta.model';

export interface LineaPedido {

    articulo: ProductoVenta;
    cantidad: number;
    descuento_linea: number;
    total_linea: number;

}
