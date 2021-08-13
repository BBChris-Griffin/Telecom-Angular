import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Plan from './models/Plan';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {
  
  url = 'http://localhost:9001/telecom';

  constructor(private httpClient: HttpClient) { }

  createPlans(plan: Plan): Observable<Plan>{
    return this.httpClient.post<Plan>(this.url + '/createPlans', plan);
  }

  findAllPlans(): Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(this.url + '/getPlans');
  }
}
