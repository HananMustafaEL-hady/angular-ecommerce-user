import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.student.firstChange){    
      // this.students.push(this.student);
      this.students.push(changes.student.currentValue)
    }
  }

  ngOnInit(): void {
  }
    // @Input('studentsLists') students;

students=[];
@Input('studentsLists') student;

}
