import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { interval, map } from 'rxjs'


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
  providers: [ApiService]
})
export class TrackerComponent implements OnInit {

  map: any = "";
  marker: any = "";


  user: any = ""


  x: number = 0;
  lati: number = 9.95086294599008
  longi: number = 76.36252000608927
  innerWidth: number = 0
  innerHeight: number = 0
  mapWidth: number = 300
  mapHeight: number = 300

  markerPosition: any = ""

  busLat: number = 0
  busLong: number = 0

  image: any = "https://img.icons8.com/color/48/bus.png";
  busName: any = "BUS1"
  busLabel: any = ''

  busOptions: any = new google.maps.Marker({
    position: { lat: this.busLat, lng: this.busLong },
    icon: this.image,
  });

  // markerOptions: google.maps.MarkerOptions = {draggable: false};
  // markerPosition:any={lat:9.950862,lng:76.3623200060};



  // shanthanu coords :9.95086294599008, 76.36252000608927

  options: google.maps.MapOptions = {
    center: { lat: this.lati, lng: this.longi },
    zoom: 15
  };



  constructor(private ds: ApiService, private rout: Router) { }



  ngOnInit(): void {



    const ctn = document.getElementById('ctn');

    if (ctn) {
      // Get the width of the your element
      this.mapWidth = ctn.getBoundingClientRect().width;
      this.mapHeight = ctn.getBoundingClientRect().height;


    }
    console.log('width=' + ctn?.getBoundingClientRect().width);


    console.log(this.innerWidth);

    this.initializeMap()

    let obs = interval(1000);
    obs.subscribe(() => {
      this.updateMarker()
    })
  }

  goback() {
    this.rout.navigateByUrl("/trackerhome")
  }

  getLoc() {
    this.ds.getLocApi().subscribe({
      next: (result: any) => {
        this.user = result.message
        this.busLat = parseFloat(this.user.lat)
        this.busLong = parseFloat(this.user.lon)
        this.busOptions = new google.maps.Marker({
          position: { lat: this.busLat, lng: this.busLong },
          icon: this.image,
        });
        this.busOptions.setPositon({ lat: this.busLat, lng: this.busLong })
        const markerOptions: google.maps.MarkerOptions = {
          position: { lat: this.busLat, lng: this.busLong },
          title: 'Custom Marker Title',
          label: 'A',  // A single character label for the marker
          icon: this.image, // Custom marker icon
        };
      },
      error: (result: any) => {
        console.log(result.message);

        alert(result.message)
      }
    })
  }

  // from chatGPT

  initializeMap() {
    this.ds.getLocApi().subscribe({
      next: (result: any) => {
        this.user = result.message
        this.busLat = parseFloat(this.user.lat)
        this.busLong = parseFloat(this.user.lon)
      }
    })
    const mapvar = document.getElementById('map')!;
    this.map = new google.maps.Map(mapvar, {
      center: { lat: 9.95, lng: 76.4194 },
      zoom: 6,
    });

    // Custom marker options
    const markerOptions: google.maps.MarkerOptions = {
      position: { lat: this.busLat, lng: this.busLong },

      icon: this.image, // Custom marker icon
    };

    // Create the marker with custom options
    this.marker = new google.maps.Marker(markerOptions);

    // Set the marker on the map
    this.marker.setMap(this.map);
  }

  updateMarker(){
    if(this.marker){
      // this.marker.setMap(null)
      this.ds.getLocApi().subscribe({
        next: (result: any) => {
          this.user = result.message
          this.busLat = parseFloat(this.user.lat)
          this.busLong = parseFloat(this.user.lon)
        }
      })
      // Custom marker options
      const markerOptions: google.maps.MarkerOptions = {
        position: { lat: this.busLat, lng: this.busLong },
  
        icon: this.image, // Custom marker icon
      };
  
      // Create the marker with custom options
      this.marker = new google.maps.Marker(markerOptions);
  
      this.marker.setMap(this.map)
    }
    }
    

}
