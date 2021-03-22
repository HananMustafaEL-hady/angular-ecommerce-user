import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonModule } from "@angular/common";
import {Router} from '@angular/router'
import {AuthService} from '../auth/auth.service'
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


  constructor(private Activated_Route :ActivatedRoute ,private router:Router,private http:HttpClient ,private order:AuthService) {


   }

  ngOnInit(): void {
    this.Getuser();
    this.getorder();
  }

  userorder=[{"Order_Placed_date": "",
  "Order_delivered_date": "",
  "items": [],
  "order_status": "",
  "userid": ""}];

  user=[{

"address": "",
"email": "",
"firstName": "",
"gender": "",
"lastName": "",
"phone":""
  }]
  urlbase="https://restaurant98.herokuapp.com/users"


  token=localStorage.getItem("token");
   httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'json/html',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':`${this.token}`
    }),
    // responseType: 'json' as 'json'
  };

  Getuser(){



    this.http.get(this.urlbase,this.httpOptions).pipe(
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

  },err=>{
    if(err instanceof HttpErrorResponse){
      if(err.status===401){
        this.router.navigate(['/login']);
      }
    }
  }


  );

  }
getorder(){

  this.order.GetMethodauth("https://restaurant98.herokuapp.com/order/user").pipe(
    map(resDB=>{
     console.log(resDB)
    const arrposts=[];
     arrposts.push(...resDB);
    return  arrposts;

  }

  ))
  .subscribe(posts=>{
  console.log(posts);
  this.userorder= posts;
  console.log(this.userorder);


}
);

}

}
