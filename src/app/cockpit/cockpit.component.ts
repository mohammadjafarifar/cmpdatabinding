import {Component, EventEmitter, OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded=new EventEmitter<{name:string,content:string}>();
  @Output() blueprintadded=new EventEmitter<{name:string,content:string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
   this.serverAdded.emit({name:this.newServerName,content:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintadded.emit({name:this.newServerName,content:this.newServerContent});
  }
}
