import { fundido } from './../animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  encapsulation: ViewEncapsulation.None, 
  animations: [fundido]
})
export class KeeperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
