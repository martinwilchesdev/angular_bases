import { Component } from '@angular/core'

// El decorador @Component permite convertir una clase en un componente
@Component({
    selector: 'app-root',
    // Las propiedades definidas en la clase AppComponent podran ser accedidas desde el archivo especificado como valor de la propiedad
    templateUrl: './app.component.html'
})
export class AppComponent {
    public title:string = 'Bases de Angular'
}
