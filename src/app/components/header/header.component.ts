import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  isadmin
role;
admin() {
this.role=  this.auth.Getuserrole();
if(this.role=="admin"){
  return true;
}
else{ return  false;}


  }



}
