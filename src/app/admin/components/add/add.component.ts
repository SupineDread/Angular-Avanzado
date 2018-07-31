import { Component, OnInit, animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService } from '../../../services/animal.service';
import { userService } from '../../../services/user.service';
import { uploadService } from '../../../services/upload.service';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { fadeIn } from '../../animation';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'], 
  animations: [fadeIn],
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
    this.animal = new Animal('', '', '', 2018, '', '')
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
        console.log(res)
      }else{
        this.status = 'success'
        this.animal = res.animalStored
        //subir la imagen del animal
        if(!this.filesToUpload){
          this._router.navigate(['/admin-panel/listado'])
        }else{
          this._uploadService.makeFileRequest(this.url+'animal/image/'+this.animal._id, [], this.filesToUpload, this.token, 'image').then(
            (result: any)=>{
              this.animal.image = result.filename
              this._router.navigate(['/admin-panel/listado'])
            }
          )
        }
      }
    }, error => {
      let errorMessage = <any>error
      if(errorMessage != null) this.status = 'error'
      console.log(this.status)
    })
  }

  public filesToUpload: Array<File>
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files
  }

}