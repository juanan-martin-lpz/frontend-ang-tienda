import { LineaPedido } from './linea-pedido.model';

export interface NuevoUsuario {

    _id: string;
    nombre: string;
    apellidos: string;
    login: string;
    password: string;
    email: string;
    imagen: string;
    rol: string;
    idioma: string;
    telefono: string;
    direccion: string;
    cesta: LineaPedido[];
    historicoCesta: LineaPedido[];
}
