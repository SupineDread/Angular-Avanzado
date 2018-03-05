import { fundido } from './../animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None, 
  animations: [fundido]
})
export class ContactComponent implements OnInit {

  emailContacto: string

  constructor() { }

  ngOnInit() {
  }

  saveEmail(){
    localStorage.setItem('email', this.emailContacto)
    console.log(localStorage.getItem('email'))
  }

}
