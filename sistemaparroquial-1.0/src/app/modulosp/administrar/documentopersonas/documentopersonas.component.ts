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
      apellido: 'Emisison de documentos',
      documentos: 'Permite solicitar un doumento'
  },
  {
    id:2,
    nombre: 'Emisison de documentos',
    apellido: 'Emisison de documentos',
    documentos: 'Permite solicitar un doumento'
  },
  {
    id:3,
    nombre: 'Emisison de documentos',
    apellido: 'Emisison de documentos',
    documentos: 'Permite solicitar un doumento'
  },
  {
    id:4,
    nombre: 'Emisison de documentos',
    apellido: 'Emisison de documentos',
    documentos: 'Permite solicitar un doumento'
  }

  ];
  constructor() { }

  ngOnInit() {
  }

}
