import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Plan from './models/Plan';
import Device from './models/Device';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {
  
  url = 'http://localhost:9001/telecom';
  id!:Text

  constructor(private httpClient: HttpClient) { }

  createPlans(plan: Plan): Observable<Plan>{
    return this.httpClient.post<Plan>(this.url + '/createPlans', plan);
  }

  findAllPlans(): Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(this.url + '/getPlans');
  }

  AddDevice(device: Device): Observable<Device>{
    return this.httpClient.post<Device>(this.url + '/AddDevice',device);
  }

  FindAllDevices(): Observable<Device[]>{
    return this.httpClient.get<Device[]>(this.url+'/devices');
  }

  FindByCustomerId(customer_id:Text): Observable<Device[]>{
    return this.httpClient.get<Device[]>(this.url+'/DeviceCustomerId='+customer_id);
  }


}
