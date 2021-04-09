import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from 'src/app/demo/service/nodeservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tipoeucaristias',
  templateUrl: './tipoeucaristias.component.html'
})
export class TipoeucaristiasComponent implements OnInit {

 
  files: TreeNode[];
  addForm1: FormGroup;
  dis: boolean;
  submitted1 = false;
  cols: any[];
  inscripciones: any[];
  tipo = {};

  showDialog() {
    this.dis = true;
  }
  
  constructor(private nodeService: NodeService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
        { field: 'name', header: 'Código' },
        { field: 'size', header: 'Nombre' },
        { field: 'type', header: 'Tipo' },
        { field: 'type', header: 'Descripción del Servicio' },
        { field: 'type', header: 'Editar' },
        { field: 'type', header: 'Eliminar' }
    ];
    this.addForm1 = this.formBuilder.group({
      tipe_id: ['', Validators.required],
      tipe_tipo: ['', Validators.required],
      tipe_nombre: ['', Validators.required],
      tipe_servicio: ['', Validators.required]
    });
  }
}
