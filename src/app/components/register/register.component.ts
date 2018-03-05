import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None, 
  providers: [userService]
})
export class RegisterComponent implements OnInit {

  public title: String
  public user: User
  public status: String

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router, 
    private _userService: userService
  ) { 
    this.title = 'Registrar'
    this.user = new User('', '', '', '', '', 'ROLE_USER', '')
  }

  ngOnInit() {

  }

  onSubmit(registerForm){
    this._userService.register(this.user).subscribe(
      response => {
        if(response.userStored){
          this.status = 'Success'
          this.user = new User('', '', '', '', '', 'ROLE_USER', '')
          registerForm.reset()
        }else{
          this.status = 'Error'
        }
      }, error => {
        console.log(<any>error)
      }
    )
  }

}
