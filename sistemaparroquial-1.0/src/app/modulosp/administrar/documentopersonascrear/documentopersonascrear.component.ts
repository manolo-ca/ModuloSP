import { Component, OnInit } from '@angular/core';
import { Documentopersonascrearejemplo } from './documentopersonascrearejemplo';
@Component({
  selector: 'app-documentopersonascrear',
  templateUrl: './documentopersonascrear.component.html'
})
export class DocumentopersonascrearComponent implements OnInit {
  documentospersonas:Documentopersonascrearejemplo[]=[
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

  ngOnInit(): void {
  }

}
