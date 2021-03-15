import { Component } from '@angular/core';

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
//   tablist=[
//     {title:"malak",feed:"feed1",Telephone:1021002},
//   {title:"Ahmed",feed:"feed2",Telephone:1021002},
//   {title:"mustafa",feed:"feed3",Telephone:1021002},
//   {title:"mohamed ",feed:"feed4",Telephone:1021002},
//   {title:"Ali",feed:"feed5",Telephone:1021002},
//   ]
//   flist=this.tablist;
//   filtersearch(tabs){
//    console.log(tabs);
//    if(tabs===""){
//      this.flist=this.tablist;
//    }
//    else{
//     this.flist=  this.tablist.filter(function(list) {
//       return list.title.toLowerCase().startsWith(tabs.toLowerCase())
//     });
//     console.log(this.flist);
//    }


// }
students;
// students:Array<{name ,city,email,age}>=[]

studentfun(student){
console.log(student);
// this.students.push(student);
this.students=student;
 //console.log(this.students)

}


}
