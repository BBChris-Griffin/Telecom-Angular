import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Plan from './models/Plan';
import Device from './models/Device';
import User from './models/User';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {
  
  url = 'http://localhost:9001/telecom';
  id!:Text
  excess!: ArrayBuffer;
  check!:Boolean;

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

  EstimatedPrice(customer_id:Text): Observable<number>{
    return this.httpClient.get<number>(this.url+'/totalPrice/c_id='+customer_id);
  }

  
  Login(customer_id:Text, password:Text):Observable<Boolean>{

    return this.httpClient.get<Boolean>(this.url+'/authenticate/id='+customer_id+'/password='+password);

  }
  AddUserIDToDevice(customer_id:Text, phoneNumber:string): Observable<ArrayBuffer>{
    return this.httpClient.put<BigInteger>(this.url+'/customer_id=' + customer_id + '/phone_number=' + phoneNumber, this.excess);
  }

  UpdatePhoneNumber(oldPhoneNumber:Text, newPhoneNumber:Text): Observable<ArrayBuffer>{
    return this.httpClient.put<BigInteger>(this.url+'/old_phone_num=' + oldPhoneNumber + '/new_phone_num=' + newPhoneNumber, this.excess);
  }

  DeleteDevice(phoneNumber:Text): Observable<ArrayBuffer>{
    return this.httpClient.delete<BigInteger>(this.url+'/delete-device=' + phoneNumber);
  }

  AddPlanIDToDevice(plan_id:Text, phoneNumber:Text): Observable<ArrayBuffer>{
    return this.httpClient.put<BigInteger>(this.url+'/plan_id=' + plan_id + '/phone_number=' + phoneNumber, this.excess);
  }
}
