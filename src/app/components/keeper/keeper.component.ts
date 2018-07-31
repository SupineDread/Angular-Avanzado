import { fundido } from './../animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { userService } from '../../services/user.service';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  encapsulation: ViewEncapsulation.None, 
  providers: [userService],
  animations: [fundido]
})
export class KeeperComponent implements OnInit {

  public title: String
  public keepers: User[]
  public url: String

  constructor(
    private _userService: userService,
  ) {
    this.title = 'Cuidadores'
    this.url = GLOBAL.url
   }

  ngOnInit() {
    this._userService.getKeepers().subscribe(res => {
      if(!res.keepers){

      }else{
        this.keepers = res.keepers
      }
    }, err => {
      console.log(err)
    })
  }

}
