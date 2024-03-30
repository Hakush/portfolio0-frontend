import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/services/person.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  miPortfolio:any;
  persona: person = new person('Facundo Sharry',22,'Web Developer','Student','Cordoba, Argentina','3515404296','facundo.sharry@gmail.com','https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U','Soy programador web y estudiante de Ciencias de la Computacion');

  constructor(private datosPortfolio:PortfolioService, public personaService: PersonService) {

  }

  ngOnInit():void {
    // LLamada antigua a datos de un json
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });

    // llamada a getProfile que retorna la persona con id = 1;
    this.personaService.getPerson().subscribe(data => {
      this.persona = data;
    });
  }
}
