import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './user';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs//operators';

@Injectable()
export class AuthService {

  private URL_login="http://localhost:3000/users/login";
  private URL_register="http://localhost:3000/users/";
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

  token=localStorage.getItem("token");
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
    this.user= posts;
    return this.user[0].role

  });

  }






}
