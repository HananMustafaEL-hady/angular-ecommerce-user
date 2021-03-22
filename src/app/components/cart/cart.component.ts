import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../auth/auth.service'
import { map } from 'rxjs//operators';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router ,private menu:AuthService) { }

  ngOnInit(): void {
 this.Getcarts();

  }
  carts=[];

  urlbase="https://restaurant98.herokuapp.com/cart"

token=localStorage.getItem("token");
// @ViewChild('myCheckbox') myCheckbox;


/****************************************************************************************************/

Getcarts(){

  const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':`${this.token}`
    }),
    responseType: 'json' as 'json'
  };


  this.http.get(this.urlbase,httpOptions).pipe(
    map(resDB=>{
      console.log(resDB)
    const arrposts:{name:string, price:number, description:string}[]=[];

    for(const key in resDB){

      arrposts.push({...resDB[key]});
    }
    return arrposts;
  }

  ))
  .subscribe(posts=>{
  console.log(posts);
  this.carts=posts;

},err=>{
  if(err instanceof HttpErrorResponse){
    if(err){
      this.router.navigate(['/login']);
    }
  }
}
);

}
arrOfOrder=[]


/////////////////////////////////////////////////////////make list of orders////////////////////////////////////////////////
// addToOrder(item){
//   this.arrOfOrder.push(item);
//    console.log(this.arrOfOrder);
// };
/****************************************************************************************************/
  deleteCart(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization':`${this.token}`
      }),
      responseType: 'json' as 'json'
    };
    // console.log(id);
    this.http.delete(`${this.urlbase}/${id}`,httpOptions).subscribe(posts=>{
      console.log(posts);
    });
    }



/****************************************************************************************************/
countedit
EditCount(id,count){
  console.log(count);

  const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':`${this.token}`
    }),
    responseType: 'text' as 'json'
  };
  // console.log(id);
  this.http.patch(`${this.urlbase}/${id}`, {count:count},httpOptions).subscribe(posts=>{
    console.log(posts);
  });
  }





makeOrder(){
let arrsend=[]


  console.log(this.carts);
for(var i =0;i<this.carts.length;i++){
 var obj={
      menuid: this.carts[i].menuid,
      count: this.carts[i].count,
 }
 arrsend.push(obj);
//  console.log(arrsend);
}

// arrsend=this.arrOfOrder;
console.log(arrsend);

  // this.http.post("http://localhost:3000/order",{arrsend,httpOptions}).subscribe(posts=>{
  //   console.log(posts);
  // });

  const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
 this.http.post<any>("https://restaurant98.herokuapp.com/order",arrsend, {headers: headers}).subscribe(posts=>{
    console.log(posts);
    this.router.navigate(['/profile/1']);
    // this.cartdelete();
  });



}
cartdelete(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':`${this.token}`
    }),
    responseType: 'json' as 'json'
  };
  this.http.delete<any>("https://restaurant98.herokuapp.com/cart",httpOptions).subscribe(posts=>{
    console.log(posts);
})

}


}

