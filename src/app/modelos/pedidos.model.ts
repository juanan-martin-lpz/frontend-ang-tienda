import { LineaPedido } from './linea-pedido.model';
import { UsuarioVenta } from './usuario-venta.model';

export interface Pedido {

    _id: string;
    numero: number;
    cliente: UsuarioVenta;
    direccion: string;
    estado: string;
    fecha: Date;

    lineas: LineaPedido[];

    descuento_comercial: number;
    iva: number;
    total_pedido: number;

}
