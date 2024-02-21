import { NgModule } from '@angular/core'
import { CounterComponent } from './components/counter/counter.component'

// Los modulos permiten encapsular una funcionalidad especifica
@NgModule({
    declarations: [CounterComponent], // Componentes que podran ser utilizados dentro del modulo
    exports: [CounterComponent] // Componentes que seran expuestos para que puedan ser accedidos desde otros modulos
})
export class CounterModule {}
