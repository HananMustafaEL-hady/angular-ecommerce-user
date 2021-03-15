import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent{
  search:string
  @Output('fun_search') searchEvent=new EventEmitter();
  constructor() { }

 fun_search(){
   
     this.searchEvent.emit(this.search);
     console.log(this.search)

   
 }

}
