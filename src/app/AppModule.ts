import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { TrackerhomeComponent } from './trackerhome/trackerhome.component';
import { TrackerComponent } from './tracker/tracker.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    AdminhomeComponent,
    TrackerhomeComponent,
    TrackerComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
