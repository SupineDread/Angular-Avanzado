import { Injectable } from '@angular/core'
import { Router, CanActivate } from "@angular/router"
import { userService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate{

    constructor(
        private _router: Router,
        private _userService: userService
    ){

    }

    canActivate(){
        let identity = this._userService.getIdentity()
        if(identity && identity.role == 'ROLE_ADMIN'){
            return true
        }
        this._router.navigate(['/'])
        return false
    }

}