import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [
    { path: '', component: CatalogoComponent }
];


export const TIENDA_ROUTES = RouterModule.forChild(routes);
