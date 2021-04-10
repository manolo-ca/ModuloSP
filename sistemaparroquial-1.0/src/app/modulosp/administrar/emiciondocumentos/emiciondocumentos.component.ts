import { Component, OnInit } from '@angular/core';
import {Emiciondocumentosprueba} from './emiciondocumentosprueba';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from 'src/app/demo/service/nodeservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emiciondocumentos',
  templateUrl: './emiciondocumentos.component.html'
})
export class EmiciondocumentosComponent implements OnInit {
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
    calendario:'09/04/2021',
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
 

  ngOnInit() {
    
    this.nodeService.getFilesystem().then(files => this.files = files);
    this.addForm2 = this.formBuilder.group({
      tipe_nom: ['', Validators.required],
      tipe_doc: ['', Validators.required],
      tipe_estado: ['', Validators.required]
    });

    this.nodeService.getFilesystem().then(files => this.files = files);
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
