import { Component, DoCheck, OnInit, animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService } from '../../../services/animal.service';
import { userService } from '../../../services/user.service';
import { uploadService } from '../../../services/upload.service';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'], 
  providers: [
    userService, 
    AnimalService,
    uploadService
  ]
})
export class AddComopnent implements OnInit{
  public title
  public animal: Animal
  public identity
  public token
  public url: String
  public status

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: userService,
    private _animalService: AnimalService,
    private _uploadService: uploadService
  ){
    this.title = 'Añadir'
    this.animal = new Animal('', '', 2018, '', '')
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.url = GLOBAL.url
  }

  ngOnInit(){
    console.log('Animal add component cargado')
  }

  onSubmit(){
    this._animalService.addAnimal(this.token, this.animal).subscribe(res => {
      if(!res.animalStored){
        this.status = 'error'
      }else{
        this.status = 'success'
        this.animal = res.animalStored
        //subir la imagen del animal
        this._router.navigate(['/admin-panel/listado'])
      }
    }, error => {
      let errorMessage = <any>error
      if(errorMessage != null) this.status = 'error'
    })
  }

}