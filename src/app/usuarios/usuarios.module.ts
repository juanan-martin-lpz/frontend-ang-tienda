import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AceptacionComponent } from './aceptacion/aceptacion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios.component';
import { USUARIOS_ROUTES } from './usuarios-routing.module';

@NgModule({
    declarations: [LoginComponent, RegistroComponent, AceptacionComponent, UsuariosComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        USUARIOS_ROUTES
    ],
    exports: [
        UsuariosComponent
    ]
})
export class UsuariosModule { }
