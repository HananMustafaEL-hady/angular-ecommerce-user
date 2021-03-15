import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pic1 :string = "assets/images/01.png"
  pic2 :string = "assets/images/02.png"
  chef1:string = "assets/images/4.png"
  chef2 :string = "assets/images/2-1.png"
  chef3 : string = "assets/images/7.png"

}
