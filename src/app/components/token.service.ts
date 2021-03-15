import { Injectable,Injector} from '@angular/core';
import { from } from 'rxjs';
import {HttpInterceptor}from '@angular/common/http'
import {AuthService} from './auth/auth.service'
@Injectable({
  providedIn: 'root'
})
export class TokenService  implements HttpInterceptor {

  constructor(private Injector:Injector) { }


intercept(req,next){
  let auth =this.Injector.get(AuthService);
  let tokenReq=req.clone({

setHeaders:{
  Authorization:`${auth.getToken()}`
}

  })
  return next.handle(tokenReq);
}

}
