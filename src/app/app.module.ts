import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromUser from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorToken } from './interceptor/seguridad.interceptor';
import { TiendaModule } from './tienda/tienda.module';
import { UsuariosModule } from './usuarios/usuarios.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        APP_ROUTES,
        SharedModule,
        PedidosModule,
        TiendaModule,
        UsuariosModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),
        StoreModule.forFeature(fromUser.userFeatureKey, fromUser.UsuariosReducer),
        EffectsModule.forFeature([UserEffects]),
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorToken,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
