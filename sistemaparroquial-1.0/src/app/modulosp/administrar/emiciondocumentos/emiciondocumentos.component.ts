import { Component, OnInit } from '@angular/core';
import {Emiciondocumentosprueba} from './emiciondocumentosprueba';
@Component({
  selector: 'app-emiciondocumentos',
  templateUrl: './emiciondocumentos.component.html'
})
export class EmiciondocumentosComponent implements OnInit {
  emiciondocumentos:Emiciondocumentosprueba[]=[
    {
      id:1,
      fecha_registro:'12/20/2021',
      referencias:'una referencia',
      descripcion:'una descripcion',
      fecha_solicitud:'21/12/2021',
      calendario:'08/04/2021',
      nombre:'juan lucas',
      tipo_de_documento:'certificado de bautizo',
      estado:'pendiente'
      
  },
  {
    id:2,
    fecha_registro:'12/20/2021',
    referencias:'una referencia',
    descripcion:'una descripcion',
    fecha_solicitud:'21/12/2021',
    calendario:'08/04/2021',
    nombre:'juan lucas',
    tipo_de_documento:'certificado de bautizo',
    estado:'pendiente'
    
},
{
  id:3,
  fecha_registro:'12/20/2021',
  referencias:'una referencia',
  descripcion:'una descripcion',
  fecha_solicitud:'21/12/2021',
  calendario:'08/04/2021',
  nombre:'juan lucas',
  tipo_de_documento:'certificado de bautizo',
  estado:'pendiente'
  
}

  ];
  constructor() { }

  ngOnInit() {
  }

}
