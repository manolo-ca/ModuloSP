import { Component, OnInit } from '@angular/core';
import {Inscripcioneucaristiasejemplo} from './inscripcioneucaristiasejemplo';
@Component({
  selector: 'app-inscripcioneucaristias',
  templateUrl: './inscripcioneucaristias.component.html'
})
export class InscripcioneucaristiasComponent implements OnInit {
  documentospersonas:Inscripcioneucaristiasejemplo[]=[
    {
    id:1,
    nombre:'Juan Carlos',
    otros:'familia y  amigos',
    descripcion_nombre:'el soltero xavier bravo',
    tipo_eucaristia:'intencion',
    calendario:'01/02/2021',
    fecha_registro:'08/04/2021',
    valor_voluntario:1
      
  },
  {
    id:2,
    nombre:'Juan Lopez',
    otros:'murio por pendejo el amigo',
    descripcion_nombre:'juan gabriel joto',
    tipo_eucaristia:'muertos',
    calendario:'01/02/2021',
    fecha_registro:'08/04/2021',
    valor_voluntario:1
  }
 
  ]
  constructor() { }

  ngOnInit() {
  }

}
