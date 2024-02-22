import { Component, Input } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {
    /**
     * Un componente hijo recibe propiedades del componente padre mediante la directiva @Input
     * La propiedad que precede a la directiva Input() sera el valor por defecto que tomara la propiedad que se trata de enviar desde el padre. El identificador de esta propiedad se utilizara como referencia para el acceso desde el componente padre
    */
    @Input()
    public charactersList: Character[] = [
        {
            name: 'Trunks',
            power: 10
        }
    ]
}
