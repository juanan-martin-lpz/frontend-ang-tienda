import { Routes, RouterModule } from '@angular/router';
import { AceptacionComponent } from './aceptacion/aceptacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
    { path: 'usuarios/login', component: LoginComponent },
    { path: 'usuarios/register', component: RegistroComponent },
    { path: 'usuarios/register/acceptterms', component: AceptacionComponent }
];


export const USUARIOS_ROUTES = RouterModule.forChild(routes);
