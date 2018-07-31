import { fundido } from '../animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AnimalService } from '../../services/animal.service';
import { userService } from '../../services/user.service';
import { Animal } from '../../models/animal';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  encapsulation: ViewEncapsulation.None, 
  providers: [AnimalService],
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {

  public title: string
  public animals: Animal[]
  public token
  public identity
  public busqueda
  public url: string

  constructor(
    private _userService: userService,
    private _animalService: AnimalService,
  ){
    this.title = 'Animales'
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.url = GLOBAL.url
  }

  ngOnInit() {
    this._animalService.getAnimals().subscribe(res=>{
      if(!res.animals) return
      this.animals = res.animals
    }, error => {
      console.log('No se han podido obtener los animales')
    })
  }

}
