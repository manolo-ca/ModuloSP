import { Component, OnInit } from '@angular/core';
import { Documentopersonasejemplo } from './documentopersonasejemplo';

@Component({
  selector: 'app-documentopersonas',
  templateUrl: './documentopersonas.component.html'
})
export class DocumentopersonasComponent implements OnInit {
  documentospersonas:Documentopersonasejemplo[]=[
    {
      id:1234,
      nombre: 'Juliano Seven',
      apellido: ' Lindo Parado'
      
  },
  {
    id:4321,
    nombre: 'Jose ',
    apellido: 'Perez'
  },
  {
    id:5673,
    nombre: 'Daniela ',
    apellido: 'Cordova'
  },
  {
    id:2345,
    nombre: 'Guadalupe',
    apellido: 'Señor'
  }

  ];
  constructor() { }

  ngOnInit() {
  }

}
