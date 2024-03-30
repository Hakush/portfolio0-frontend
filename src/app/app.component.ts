import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto1';

  public footerPos() {
    // Atributos/Variables
  //Todo, condicional si el componente entre el header y el footer
  //es demasiado pequeño, colocar en position absolute el footer
  // en la pos left:0, bottom: 0, para que aparezca abajo en la pantalla
  //y no flotando: 
/*1.- Crear el elemento
    let element0 = document.createElement("h2");
//2.- Crear un nodo de texto
    let contenido = document.createTextNode("Titulo");
//3.- Añadir el nodo de texto al elemento
    element0.appendChild(contenido);
//4.- Agregar atributos al elemento
    element0.setAttribute("align","center");
//5.- Agregar el elemento al documento
    document.getElementById("footer").appendChild(element0);
    //document.body.appendChild(element0);
    */
  }

  ngOnInit():void {
    
  }
}
