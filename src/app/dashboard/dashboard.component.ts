import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private rout:Router){}

  ngOnInit(): void {
    
  }

  logout(){
    this.rout.navigateByUrl("")
  }

  gototrackerhome(){
    this.rout.navigateByUrl("/trackerhome")
  }

}
