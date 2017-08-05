import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee.component';
import { HomeComponent } from './home.component';
import { EmployeeService } from './employee.service';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent, EmployeeListComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
