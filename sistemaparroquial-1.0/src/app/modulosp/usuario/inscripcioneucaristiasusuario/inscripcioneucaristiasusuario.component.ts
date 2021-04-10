import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SelectItem} from 'primeng/primeng';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Inscripcioneucaristiasusuarioprueba} from './inscripcioneucaristiasusuarioprueba';
@Component({
  selector: 'app-inscripcioneucaristiasusuario',
  templateUrl: './inscripcioneucaristiasusuario.component.html'
})
export class InscripcioneucaristiasusuarioComponent implements OnInit {
  inscripcioneu:Inscripcioneucaristiasusuarioprueba[]=[
    {
      cedula:124,
      nombre:'lucas',
      apellido:'moreno',
      fecha:'21/12/2021',
      tipo:'bautizo',
      descripcion:'lalalalala'
      
  },
  {
      cedula:124,
      nombre:'lucas',
      apellido:'moreno',
      fecha:'21/12/2021',
      tipo:'bautizo',
      descripcion:'lalalalala'
    
},

  ];

  addForm: FormGroup;
  
  submitted = false;
  
  date1: Date;
  date2: Date;
  
  fullcalendarOptions: any;
  inscripciones: any[];
  tipo = {};

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    
    
  }
  
  
  
  ngOnInit() {
   
    this.addForm = this.formBuilder.group({
      inse_id: ['', Validators.required],
      inse_fecharegistro: ['', Validators.required],
      inse_descripcionnombre: ['', Validators.required],
      inse_valorvoluntario: ['', Validators.required],
      inse_persona: ['', Validators.required],
      inse_otros: ['', Validators.required],
      inse_tiposeucaristias: ['', Validators.required]
    });
    this.fullcalendarOptions = {
      plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
      defaultDate: '2016-01-12',
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    };

  }
  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    alert("Artículo guardado con éxito");

  }
}
