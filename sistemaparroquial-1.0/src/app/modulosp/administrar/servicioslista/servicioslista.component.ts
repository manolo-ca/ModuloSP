import { Component, OnInit } from '@angular/core';
import { Servicioslistaejemplo} from './servicioslistaejemplo';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from 'src/app/demo/service/nodeservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicioslista',
  templateUrl: './servicioslista.component.html'
 
})
export class ServicioslistaComponent implements OnInit {
  files: TreeNode[];
  addForm2: FormGroup;
  dis: boolean;
  submitted1 = false;
  cols: any[];
  inscripciones: any[];
  tipo = {};

  showDialog() {
    this.dis = true;
  }
  constructor(private nodeService: NodeService,private router: Router, private formBuilder: FormBuilder) { }

  servicios:Servicioslistaejemplo[]=[
    {
      id:1,
      nombre: 'Emisison de documentos',
      descripcion: 'Permite solicitar un doumento'
  },
  {
      id:2,
      nombre: 'Incripcion a eucaristias',
      descripcion: 'permite incribirse de eucaristias'
  },
  {
      id:3,
      nombre: 'Reservacion de eucaristias',
      descripcion: 'Permite reservar una eucaristia'
  },
  {
      id:4,
      nombre: 'Incripcion al cursillo',
      descripcion: 'Permite incribirse al cursillo sacramental'
  }

  ];

 

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);
    this.addForm2 = this.formBuilder.group({
     
      tipe_serviciop: ['', Validators.required],
      tipe_descripcion: ['', Validators.required]
    });
  }

}
