import { fundido } from './../animation';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'], 
    animations: [
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })), 
            state('active', style({
                border: '5px solid yellow', 
                background: 'red', 
                borderRadius: '50px',
                transform: 'scale(1.2)'
            })), 
            transition('inactive => active', animate('300ms linear')), 
            transition('active => inactive', animate('300ms linear'))
        ]), 
        fundido
    ]
})

export class TiendaComponent implements OnInit{
    
    public title:any;
    public nombreDelParque: String
    public miParque;

    public status = 'inactive';

    constructor(){
        this.title = "Esta es la tienda"
    }

    changeStatus(status){
        if(status=='inactive') {
            this.status='active'
        }else{
            this.status='inactive'
        }
    }

    mostrarNombre(){
        console.log(this.nombreDelParque)
    }

    ngOnInit(){

    }

    verDatosParque(event){
        console.log(event);
        this.miParque = event
    }

    textoEditor(content){
        console.log(content)
    }

}