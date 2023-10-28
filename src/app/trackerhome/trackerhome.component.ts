import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackerhome',
  templateUrl: './trackerhome.component.html',
  styleUrls: ['./trackerhome.component.css']
})
export class TrackerhomeComponent implements OnInit{

  constructor(private rout:Router){}

  ngOnInit(): void {
    
  }

  goback(){
    this.rout.navigateByUrl("/dashboard")
  }

  gototracker(){
    alert('working')
    this.rout.navigateByUrl("/tracker")
  }
}
