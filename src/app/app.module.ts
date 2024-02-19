import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CounterComponent } from './counter/counter.component'

@NgModule({
    declarations: [AppComponent, CounterComponent], // Definicion de los componentes que podran ser accedidos dentro del modulo
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
