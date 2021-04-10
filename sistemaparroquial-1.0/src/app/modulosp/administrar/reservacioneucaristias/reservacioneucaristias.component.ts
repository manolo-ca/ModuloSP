import { Component, OnInit } from '@angular/core';
import {Reservacioneucaristiasprueba} from './reservacioneucaristiasprueba';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from 'src/app/demo/service/nodeservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservacioneucaristias',
  templateUrl: './reservacioneucaristias.component.html'
})
export class ReservacioneucaristiasComponent implements OnInit {
  files: TreeNode[];
  addForm2: FormGroup;
  dis: boolean;
  submitted1 = false;
  cols: any[];
  inscripciones: any[];
  tipo = {};
  addForm1: FormGroup;

  showDialog() {
    this.dis = true;
  }
  constructor(private nodeService: NodeService,private router: Router, private formBuilder: FormBuilder) { }

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


  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);
    this.addForm2 = this.formBuilder.group({
      tipe_descripcion: ['', Validators.required],
      tipe_nom: ['', Validators.required],
      tipe_doc: ['', Validators.required],
      tipe_estado: ['', Validators.required]
    });
    this.addForm1 = this.formBuilder.group({
      tipe_fecha_i: ['', Validators.required],
      tipe_fecha_f: ['', Validators.required],
      tipe_documento: ['', Validators.required]
      
    });
  }
  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayPosition: boolean;

  position: string;

  showModalDialog() {
      this.displayModal = true;
  }

  showBasicDialog() {
      this.displayBasic = true;
  }
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}
}
