import { Component, OnInit } from '@angular/core';
import { Documentopersonasejemplo } from './documentopersonasejemplo';

@Component({
  selector: 'app-documentopersonas',
  templateUrl: './documentopersonas.component.html'
})
export class DocumentopersonasComponent implements OnInit {
  documentospersonas:Documentopersonasejemplo[]=[
    {
      id:1,
      nombre: 'Emisison de documentos',
      apellido: 'Emisison de documentos'
      
  },
  {
    id:2,
    nombre: 'Emisison de documentos',
    apellido: 'Emisison de documentos'
  },
  {
    id:3,
    nombre: 'Emisison de documentos',
    apellido: 'Emisison de documentos'
  },
  {
    id:4,
    nombre: 'Emisison de documentos',
    apellido: 'Emisison de documentos'
  }

  ];
  constructor() { }

  ngOnInit() {
  }

}
