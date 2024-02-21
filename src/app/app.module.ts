import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CounterModule } from './counter/counter.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HeroesModule } from './heroes/heroes.module'

@NgModule({
    declarations: [AppComponent], // Definicion de los componentes que podran ser accedidos dentro del modulo
    imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
