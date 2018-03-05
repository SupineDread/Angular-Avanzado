import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {fundido} from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None, 
  animations: [fundido]
})
export class HomeComponent implements OnInit {

  title: string = "Bienvenido a Ng Zoo"

  constructor() { }

  ngOnInit() {
  }

}
