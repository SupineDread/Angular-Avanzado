import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { userService } from '../../services/user.service';
import { User } from '../../models/user';
import { uploadService } from '../../services/upload.service';

@Component({
  selector: 'user-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  encapsulation: ViewEncapsulation.None, 
  providers: [userService, uploadService]
})
export class ProfileEditComponent implements OnInit {

  public title: String
  public user: User
  public identity
  public token
  public status
  public url: string

  constructor(
    private _userService: userService, 
    private _uploadService: uploadService
  ) { 
    this.title = 'Actualizar'
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.user = this.identity
    this.url = GLOBAL.url
  }

  ngOnInit() {
  }

  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
      response => {
        if(!response.user){
          this.status = 'Error'
        }else{
          this.status = 'Success'
          localStorage.setItem('identity', JSON.stringify(this.user))
          //Se ejecuta la subida de la imagen
          this._uploadService.makeFileRequest(this.url+'user/image/'+this.user._id, [], this.filesToUpload, this.token, 'image').then(
            (result: any)=>{
              this.user.image = result.filename
              localStorage.setItem('identity', JSON.stringify(this.user))
              console.log(this.user)
            }
          )
        }
      }, error => {
        var errorMessage = <any>error
        if(errorMessage != 'null'){
          this.status = 'Error'
        }
      }
    )
  }

  public filesToUpload: Array<File>
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files
  }

}
