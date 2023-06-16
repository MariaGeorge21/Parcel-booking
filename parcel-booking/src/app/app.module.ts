import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';

import {  ReactiveFormsModule } from '@angular/forms';
import { FormsModule, } from '@angular/forms';
import { LandComponent } from './land/land.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';


  // Rest of your component code



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    RegistrationComponent,
    
    LandComponent,
    AddParcelComponent,
    FooterComponent,
    NavComponent,
    AdminDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,MatSelectModule,FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
