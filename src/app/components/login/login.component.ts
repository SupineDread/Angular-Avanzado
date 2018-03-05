import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { User } from '../../models/user';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None, 
  providers: [userService]
})
export class LoginComponent implements OnInit {

  public title: String
  public user: User
  public identity
  public token
  public status: String

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router, 
    private _userService: userService
  ) { 
    this.title = 'Login'
    this.user = new User('','','','','','ROLE_USER','')
  }

  ngOnInit() {

  }

  onSubmit(){
    //Logear al usuario y conseguir el objeto
    this._userService.signup(this.user).subscribe(
      response=>{
        this.identity = response.user
        if(!this.identity || !this.identity._id){
          console.log('El usuario no se ha logeado correctamente')
        }else{
          this.identity.password = ''
          localStorage.setItem('identity', JSON.stringify(this.identity))
          //Conseguir el token
          this._userService.signup(this.user, 'true').subscribe(
            response=>{
              this.token = response.token
              if(this.token.length <= 0){
                console.log('El token no se ha generado')
              }else{
                localStorage.setItem('token', this.token)
                this.status = 'success'
                this._router.navigate(['/'])
              }
            }, error =>{
              console.log(error)
            }
          )
        }
      }, error =>{
        let errorMessage = <any>error
        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.status = 'error'
        }
      }
    )
  }

}
