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
      tipo_documento: 'Certificado de Matrimonio',
      libro_nombre: 'libro de matrimonio',
      referencia: 'pag 2'
  },
  {
    id:2,
    tipo_documento: 'Certificado de bautizo',
    libro_nombre: 'libro de bautizos',
    referencia: 'pag 23'
},
{
  id:3,
  tipo_documento: 'Certificado de solteria',
  libro_nombre: 'N/A',
  referencia: 'N/A'
}


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
