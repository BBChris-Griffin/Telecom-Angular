import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TelecomService } from './telecom.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private service: TelecomService) { }

  intercept(req, next){
    let telecomService = this.injector.get(TelecomService);
    let tokenizedReq = req;
    if(this.service.loggedIn === true) {
       tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Basic ${telecomService.getToken()}`  
        }
      })
    }
    
    return next.handle(tokenizedReq);
  }
}
