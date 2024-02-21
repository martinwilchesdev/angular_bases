import { Component } from '@angular/core'

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name: string = 'iron man'
    public age: number = 45

    /**
     * Two way data binding
        Cuando se realiza un cambio desde el lado del template HTML a las propiedades, dicho cambio se vera reflejado en la clase

     * One way binding
        El valor de las propiedades de las clases solo se podra modificar desde la clase misma
    */

    get capitalizedName(): string {
        return this.name.toUpperCase()
    }

    getHeroDescription(): string {
        return `${this.name} - ${this.age}`
    }

    changeHero(): void {
        this.name = 'Spiderman'
    }

    changeAge(): void {
        this.age = 25
    }
}
