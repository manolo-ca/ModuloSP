import { Component, OnInit } from '@angular/core';
import { Tiposdocumentosejemplo} from './tiposdocumentosejemplo';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from 'src/app/demo/service/nodeservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tiposdocumentos',
  templateUrl: './tiposdocumentos.component.html'
})
export class TiposdocumentosComponent implements OnInit {
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
  
 

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => this.files = files);
    this.addForm2 = this.formBuilder.group({
      tipe_nomdoc: ['', Validators.required],
      tipe_descripcion: ['', Validators.required],
      tipe_valor: ['', Validators.required]
    });
  }

}
