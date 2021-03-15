import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonModule } from "@angular/common";

import { map } from 'rxjs//operators';
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private Activated_Route :ActivatedRoute,private http:HttpClient  ) {


   }

  ngOnInit(): void {
    this.Getuser();
  }
  user=[{

"address": "",
"email": "",
"firstName": "",
"gender": "",
"lastName": ""
  }]
  urlbase="http://localhost:3000/users"

  token=localStorage.getItem("token");

  Getuser(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'json/html',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization':`${this.token}`
      }),
      // responseType: 'json' as 'json'
    };


    this.http.get(this.urlbase,httpOptions).pipe(
      map(resDB=>{
        console.log(resDB)
      const arrposts=[];



        arrposts.push({...resDB});

      return arrposts;
    }

    ))
    .subscribe(posts=>{
    console.log(posts);
    this.user= posts;
    console.log(this.user)

  });

  }


}
