import { Component, EventEmitter, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
    selector: 'dbz-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {
    // El decorador @Output() permite enviar informacion desde un componente hijo a su componente padre
    @Output()
    // La propiedad onNewCharacter es definida como una instancia de EventEmitter
    public onNewCharacter: EventEmitter<Character> = new EventEmitter()

    public character: Character = {
        name: '',
        power: 0
    }

    emitCharacter(): void {
        if (this.character.name.length === 0) return
        // La propiedad onNewCharacter tiene acceso al metodo emit(), el cual permite enviar un valor de un componente hijo a su componente padre
        this.onNewCharacter.emit(this.character)
        this.character = {name: '', power: 0}
    }
}
