import { Component, DoCheck, OnInit, animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AnimalService } from '../../../services/animal.service';
import { userService } from '../../../services/user.service';
import { uploadService } from '../../../services/upload.service';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { fadeIn } from '../../animation';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [fadeIn],
  providers: [uploadService, AnimalService, userService]
})
export class EditComponent implements OnInit {

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
    this.title = 'Editar'
    this.animal = new Animal('', '', '', 2018, '', '')
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.url = GLOBAL.url
  }

  ngOnInit(){
    this.getAnimal()
  }

  getAnimal(){
    this._route.params.forEach((params: Params)=>{
      let id = params.id
      this._animalService.getAnimal(id).subscribe(response => {
        if (!response.animal) {
          this._router.navigate(['/'])
        }else{
          this.animal = response.animal
        }
      }, error => {
        console.log(error)
      })
    })
  }

  onSubmit(){
    let id = this.animal._id
    this._animalService.editAnimal(this.token, id,  this.animal).subscribe(res => {
      if(!res.animalUpdated){
        this.status = 'error'
      }else{
        this.status = 'success'
        this.animal = res.animalUpdated
        //subir la imagen del animal
        if(!this.filesToUpload){
          this._router.navigate(['/animal', this.animal._id])
        }else{
          this._uploadService.makeFileRequest(this.url+'animal/image/'+this.animal._id, [], this.filesToUpload, this.token, 'image').then(
            (result: any)=>{
              this.animal.image = result.filename
              this._router.navigate(['/animal', this.animal._id])
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