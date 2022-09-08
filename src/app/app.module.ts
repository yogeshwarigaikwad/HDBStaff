import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { DelStaffComponent } from './del-staff/del-staff.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStaffComponent,
    DelStaffComponent,
    RegistrationComponent,
    HomePageComponent,
    AdminLoginComponent,
    StaffLoginComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
