import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePlansComponent } from './manage-plans/manage-plans.component';
import { DeviceComponent} from './device/device.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { NewNumberComponent } from './new-number/new-number.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';



const routes: Routes = [
  {
    path: 'new-user', component: AddUserComponent
  },
  {
    path: 'login', component: LoginComponent

  },
  {
    path: 'plans', component: ManagePlansComponent
    
  },{
    path:'device', component:DeviceComponent
  }, {
    path:'add-device', component:AddDeviceComponent
  }, {
    path:'new-number', component:NewNumberComponent
  }, {
    path:'delete-device', component:DeleteDeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
