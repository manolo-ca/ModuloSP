import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html'
})
export class ModuloComponent implements OnInit {

  constructor() { }
  images: any[];
    
  ngOnInit() {
      this.images = [];
      this.images.push({source:'assets/layout/ista/2.png', alt:'Internet es como un gran inventario de información, pero no constituye en sí misma la memoria.', title:'Umberto Eco'});
      this.images.push({source:'assets/layout/ista/9.jpg', alt:'El liderazgo efectivo es poner primero lo primero. La gestión eficaz es la disciplina llevada a cabo.', title:'Stephen Covey'});
  }
}
