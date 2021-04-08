import { Component, OnInit } from '@angular/core';
import {Reservacioneucaristiasprueba} from './reservacioneucaristiasprueba';
@Component({
  selector: 'app-reservacioneucaristias',
  templateUrl: './reservacioneucaristias.component.html'
})
export class ReservacioneucaristiasComponent implements OnInit {
  documentospersonas:Reservacioneucaristiasprueba[]=[
    {
    id:1,
    nombre:'Juan Carlos',
    otros:'familia y  amigos',
    descripcion_nombre:'en su bautizo',
    tipo_eucaristia:'bautizo',
    calendario:'01/02/2021',
    fecha_registro:'08/04/2021',
    valor_fijo:50,
    estado:'pendiente'
      
  },
  {
    id:2,
    nombre:'Juan Lopez',
    otros:'murio por pendejo el amigo',
    descripcion_nombre:'juan gabriel joto',
    tipo_eucaristia:'muertos',
    calendario:'01/02/2021',
    fecha_registro:'08/04/2021',
    valor_fijo:50,
    estado:'pendiente'
  }
 
  ]
  constructor() { }

  ngOnInit() {
  }

}
