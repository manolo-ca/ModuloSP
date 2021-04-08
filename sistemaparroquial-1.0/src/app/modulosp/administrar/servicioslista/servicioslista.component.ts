import { Component, OnInit } from '@angular/core';
import { Servicioslistaejemplo} from './servicioslistaejemplo';

@Component({
  selector: 'app-servicioslista',
  templateUrl: './servicioslista.component.html'
 
})
export class ServicioslistaComponent implements OnInit {
  servicios:Servicioslistaejemplo[]=[
    {
      id:1,
      nombre: 'Emisison de documentos',
      descripcion: 'Permite solicitar un doumento'
  },
  {
      id:2,
      nombre: 'Incripcion a eucaristias',
      descripcion: 'permite incribirse de eucaristias'
  },
  {
      id:3,
      nombre: 'Reservacion de eucaristias',
      descripcion: 'Permite reservar una eucaristia'
  },
  {
      id:4,
      nombre: 'Incripcion al cursillo',
      descripcion: 'Permite incribirse al cursillo sacramental'
  }

  ];

  constructor() { }

  ngOnInit() {
  }

}
