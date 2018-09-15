import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-elementserver',
  templateUrl: './elementserver.component.html',
  styleUrls: ['./elementserver.component.css']
})
export class ElementserverComponent implements OnInit {

   @Input('srvElement') element : {type:string,name:string,content:string};
  constructor() { }

  ngOnInit() {
  }

}
