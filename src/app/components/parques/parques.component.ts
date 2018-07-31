import { fundido } from './../animation';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css'],
  encapsulation: ViewEncapsulation.None, 
  animations: [fundido]
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() nombre: String;
  @Input('longitud') metros: Number;
  public vegetacion: String;
  public abierto: boolean;
  @Output() pasameDatos = new EventEmitter();

  constructor() {
    this.nombre = "Parque de los venados"
    this.metros = 200
    this.vegetacion = "Alta"
    this.abierto = false
   }

   emitirEvento(){
     this.pasameDatos.emit({
      "nombre": this.nombre,
      "metros": this.metros,
      "vegetacion": this.vegetacion,
      "abierto": this.abierto
     })
   }

  ngOnInit() {
    console.log('Se ha cargado el componente parques')
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    console.log('Existen cambios en las propiedades');
  }

  ngDoCheck(){
    console.log('Se ha ejecutado DoCheck')
  }

  ngOnDestroy(){
    console.log('Se ha destruido este componente')
  }

}
