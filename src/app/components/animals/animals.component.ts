import { fundido } from '../animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  encapsulation: ViewEncapsulation.None, 
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
