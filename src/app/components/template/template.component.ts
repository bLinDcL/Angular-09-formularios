import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: '',
    acepta: false
  };

  paises = [{
    codigo: 'CRI',
    pais: 'Costa Rica'
  },
  {
    codigo: 'CH',
    pais: 'Chile'
  }];

  sexos: string[] = ["Hombre", "Mujer", "Otro"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log( "NgForm" , forma );
    console.log( "Value: " , forma.value );
    console.log( "Usuario: " , this.usuario );
  }

}
