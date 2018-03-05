import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { GLOBAL } from "./global";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable()
export class userService{

    public url: String
    public identity
    public token

    constructor(private _http: Http){
        this.url = GLOBAL.url
    }

    register(userToRegister){
        let params = JSON.stringify(userToRegister)
        let headers = new Headers({'Content-Type': 'application/json'})
        return this._http.post(this.url+'register', params, {headers: headers}).map(res => res.json())
    }

    signup(userToLogin, getToken = null){
        if(getToken!=null){
            userToLogin.getToken = getToken
        }
        let params = JSON.stringify(userToLogin)
        let headers = new Headers({'Content-Type': 'application/json'})
        return this._http.post(this.url+'login', params, {headers: headers}).map(res => res.json())
    }

    updateUser(userToUpdate){
        let params = JSON.stringify(userToUpdate)
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Authorization': this.getToken()
        })
        return this._http.put(this.url+'user/'+userToUpdate._id, params, {headers: headers}).map(res=>res.json())
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'))
        if(identity != 'undefined'){
            this.identity = identity
        }else{
            this.identity = null
        }
        return this.identity
    }

    getToken(){
        let token = localStorage.getItem('token')
        if(token != 'undefined'){
            this.token = token
        }else{
            this.token = null
        }
        return this.token
    }
}