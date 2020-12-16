import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TIENDA_ROUTES } from './tienda-routing.module';

import { CatalogoComponent } from './catalogo/catalogo.component';
import { CestaComponent } from './cesta/cesta.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductosComponent } from './productos/productos.component';

import { StoreModule } from '@ngrx/store';
import * as fromPedido from '../reducers/pedido.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PedidoEffects } from '../effects/pedido.effects';
import * as fromCatalogo from '../reducers/catalogo.reducer';
import { CatalogoEffects } from '../effects/catalogo.effects';
import * as fromCesta from '../reducers/cesta.reducer';
import { CestaEffects } from '../effects/cesta.effects';


@NgModule({
    declarations: [
        CatalogoComponent,
        CestaComponent,
        SidebarComponent,
        ProductosComponent
    ],
    imports: [
        CommonModule,
        TIENDA_ROUTES,
        StoreModule.forFeature(fromPedido.pedidoFeatureKey, fromPedido.reducer),
        EffectsModule.forFeature([PedidoEffects, CatalogoEffects, CestaEffects]),
        StoreModule.forFeature(fromCatalogo.catalogoFeatureKey, fromCatalogo.reducer),
        StoreModule.forFeature(fromCesta.cestaFeatureKey, fromCesta.reducer)
    ],
    exports: [
        CatalogoComponent
    ]
})
export class TiendaModule { }
