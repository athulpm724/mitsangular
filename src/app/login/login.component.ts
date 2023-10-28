import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  state:any="false"
  
  constructor(private rout:Router){}

  ngOnInit(): void {
    
  }

  lclick(){
    this.state=false
  }

  redirect(){
    this.rout.navigateByUrl("/dashboard")
  }
}
