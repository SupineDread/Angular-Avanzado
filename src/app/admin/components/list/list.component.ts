import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService } from '../../../services/animal.service';
import { userService } from '../../../services/user.service';
import { Animal } from '../../../models/animal';

import { fadeIn } from '../../animation';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [fadeIn],
  providers: [AnimalService]
})
export class ListComponent implements OnInit {

  public title: string
  public animals: Animal[]
  public token
  public identity
  public busqueda

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: userService,
    private _animalService: AnimalService,
  ){
    this.title = 'Listado'
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
  }

  ngOnInit(){
    this._animalService.getAnimals().subscribe(res=>{
      if(!res.animals) return
      this.animals = res.animals
    }, error => {
      console.log('No se han podido obtener los animales')
    })
  }

  deleteAnimal(id: String){
    this._animalService.deleteAnimal(this.token, id).subscribe(response => {
      if(!response.animal){
        this.ngOnInit()
      }
    }, error => {
      alert('Ha ocurrido un error')
    })
  }

}