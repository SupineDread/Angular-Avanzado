import { Component } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'listado';
  //numbers = [0,1,2,3,4,5]
  numbers = new Array(10)
  animals: [{
    name: string, 
    year: string
  }]
  constructor(){
    this.animals = [{
      name: 'Oso panda',
      year: '2016'
    },{
      name: 'Leon', 
      year: '2018'
    }]
  }
}