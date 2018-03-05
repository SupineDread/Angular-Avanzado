import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { userService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [userService]
})
export class AppComponent implements OnInit, DoCheck{
  public title: String
  public identity
  public url: string

  constructor(
    private _userService: userService, 
    private _router: Router,
    private _route: ActivatedRoute, 
  ){
    this.title = 'Ng Zoo'
    this.url = GLOBAL.url
  }

  logOut(){
    localStorage.clear()
    this.identity = null
    this._router.navigate(['/'])
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity()
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity()
  }

}
