import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name:'test',type:"server",content:"this is test!" }];


  onServerAdded(ServerData:{name:string,content:string}) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.name,
      content: ServerData.content
    });
  }

  onBluePrintAdded(serverdata:{name:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverdata.name,
      content:serverdata.content
    });}
}
