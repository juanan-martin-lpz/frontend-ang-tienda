import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {
        path: '',
        component: CatalogoComponent,
        // loadChildren: './tienda/tienda.module#TiendaModule'
        loadChildren: () => import('./tienda/tienda.module').then(m => m.TiendaModule)

    },
    {
        path: 'usuarios',
        component: UsuariosComponent,
        //loadChildren: './usuarios/usuarios.module#UsuariosModule'
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    },

];

export const APP_ROUTES = RouterModule.forRoot(routes);
