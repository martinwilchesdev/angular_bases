import { Component } from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy()">+1</button>
        <button (click)="decreaseBy()">-1</button>
        <button (click)="reset()">Reset Counter</button>
    `
})
export class CounterComponent {
    constructor() {}

    // Cualquier modificacion que tenga la propiedad counter, Angular mantendra sincronizado el HTML con el ciclo de deteccion de cambios
    public counter:number = 0

    // Los metodos definidos en la clase podran ser accedidos desde el HTML para modificar el comportamiento de la aplicacion
    increaseBy(): void {
        this.counter += 1
    }

    decreaseBy(): void {
        this.counter -= 1
    }

    reset(): void {
        this.counter = 0
    }
}
