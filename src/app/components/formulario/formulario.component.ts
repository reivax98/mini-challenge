import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombres: String;
  public apellidos: String;
  public correo: String;

  constructor() { 
    this.nombres = "";
    this.apellidos = "";
    this.correo = "";
  }

  ngOnInit(): void {
  }

  borrar(){
    this.nombres = "";
    this.apellidos = "";
    this.correo = "";
  }

  imprimir(){
    console.log("Nombres: " + this.nombres + '\n' + "Apellidos: " + this.apellidos + '\n'  +  "Correo Electrónico: " + this.correo)
    this.borrar();
  }

}
