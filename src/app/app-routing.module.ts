import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        loadChildren: './tienda/tienda.module#TiendaModule'

    },
    {
        path: 'usuarios',
        component: UsuariosComponent,
        loadChildren: './usuarios/usuarios.module#UsuariosModule'
    },

];

export const APP_ROUTES = RouterModule.forRoot(routes);
