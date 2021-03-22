import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './user';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs//operators';

@Injectable()
export class AuthService {

  private URL_login="https://restaurant98.herokuapp.com/users/login";
  private URL_register="https://restaurant98.herokuapp.com/users/";
   httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json; charset=utf-8'
    }),
    responseType: 'json' as 'json'
  };
   httpOptions2 = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json; charset=utf-8'
    }),
    responseType: 'text' as 'json'
  };

  token=localStorage.getItem("token");


  httpOptions4 = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':`${this.token}`
    }),
    responseType: 'json' as 'json'
   };

register(user){

 return  this.http.post<any>(this.URL_register,user,this.httpOptions2)
}


  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  loggedin(){
    return !!localStorage.getItem('token');
  }
  GetMethodauth(url){
    return this.http.get<any>(url,this.httpOptions4);
    }


  constructor( private router: Router,private http:HttpClient) {}


  login(user){
    // if (user.userName !== '' && user.password !== '' ) { // {3}
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/']);
    // }

  return  this.http.post<any>(this.URL_login,user,this.httpOptions2);


  }

  GetMethod(URL){
    return this.http.get<any>(URL,this.httpOptions);
    }
PostMethod(url,data){
  return this.http.post(url,data,this.httpOptions2);
}



  getToken(){

    return localStorage.getItem('token');
  }
  logout() {

    localStorage.removeItem("token");

    // this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  user=[{

    "address": "",
    "email": "",
    "firstName": "",
    "gender": "",
    "lastName": "",
    "role":"",
      }]

      Getuserrole(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'json/html',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization':`${this.token}`
      }),
      // responseType: 'json' as 'json'
    };


    this.http.get(this.URL_register,httpOptions).pipe(
      map(resDB=>{
        console.log(resDB)
      const arrposts=[];



        arrposts.push({...resDB});

      return arrposts;
    }

    ))
    .subscribe(posts=>{
    console.log(posts);

    return    posts;

  });

  }

  postauth(url,data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'json/html',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization':`${this.token}`
      }),
      // responseType: 'json' as 'json'
    };


    this.http.post(url,httpOptions,data).pipe(
      map(resDB=>{
        console.log(resDB)
      const arrposts=[];



        arrposts.push({...resDB});

      return arrposts;
    }

    ))
    .subscribe(posts=>{
    console.log(posts);

    return    posts;

  });

  }






}
