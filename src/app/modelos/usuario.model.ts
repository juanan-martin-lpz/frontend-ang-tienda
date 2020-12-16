import { LineaPedido } from './linea-pedido.model';

export interface Usuario {

    _id: string;
    nombre: string;
    apellidos: string;
    login: string;
    password: string;
    email: string;
    telefono: string;
    imagen: string;
    rol: string;
    idioma: string;
    direccion: string;

    cesta: LineaPedido[];
    historicoCesta: LineaPedido[];
}
