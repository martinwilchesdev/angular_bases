import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CounterModule } from './counter/counter.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HeroesModule } from './heroes/heroes.module'
import { DbzModule } from './dbz/dbz.module'

@NgModule({
    declarations: [AppComponent], // Definicion de los componentes que podran ser accedidos dentro del modulo
    imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule, DbzModule], // La importacion de los modulos incluye los componentes cada uno estos contenga
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
