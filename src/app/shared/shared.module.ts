import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        CabeceraComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CabeceraComponent,
        MenuComponent
    ]
})
export class SharedModule { }
