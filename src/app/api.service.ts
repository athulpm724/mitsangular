import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:any="https://localhost:2511"

  getLocApi(){
    return this.http.get('http://localhost:2500/ms/bus1')
  }
}

// `${this.baseUrl}/ms/bus1`
