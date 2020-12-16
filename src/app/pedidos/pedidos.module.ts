import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { FinalizacionComponent } from './finalizacion/finalizacion.component';



@NgModule({
  declarations: [ConfirmacionComponent, FinalizacionComponent],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
