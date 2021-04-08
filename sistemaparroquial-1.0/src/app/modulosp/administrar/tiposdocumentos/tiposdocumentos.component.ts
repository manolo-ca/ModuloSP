import { Component, OnInit } from '@angular/core';
import { Tiposdocumentosejemplo} from './tiposdocumentosejemplo';
@Component({
  selector: 'app-tiposdocumentos',
  templateUrl: './tiposdocumentos.component.html'
})
export class TiposdocumentosComponent implements OnInit {
  documentos:Tiposdocumentosejemplo[]=[
    {
      id:1,
      nombre:'Matrimonio',
      libro: 'Matrimonios',
      referencia: 'en la hoja x del libro de matrimonio',
      valor:1,
  },
  {
      id:2,
      nombre:'Matrimonio',
      libro: 'Matrimonios',
      referencia: 'en la hoja x del libro de matrimonio',
      valor:1,
  },
  {
      id:3,
      nombre:'Matrimonio',
      libro: 'Matrimonios',
      referencia: 'en la hoja x del libro de matrimonio',
      valor:1,
  },
  {
      id:4,
      nombre:'Matrimonio',
      libro: 'Matrimonios',
      referencia: 'en la hoja x del libro de matrimonio',
      valor:1,
  },
  {
      id:5,
      nombre:'Matrimonio',
      libro: 'Matrimonios',
      referencia: 'en la hoja x del libro de matrimonio',
      valor:1,
  }

  ]
  
  constructor() { }

  ngOnInit() {
  }

}
