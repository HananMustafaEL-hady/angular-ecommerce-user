import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed:boolean;
  constructor(){
    this.isCollapsed=true;
  }
  userslogin:Array<{token,role}>=[]

  userfun(user){
  console.log(user);
  this.userslogin.push(user);
   console.log(this.userslogin)

  }

students;

studentfun(student){
console.log(student);
// this.students.push(student);
this.students=student;
 //console.log(this.students)

}
ngOnInit(){
  AOS.init();
  }


}
