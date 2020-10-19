import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {MessageServiceService} from '../message-service.service'
import {ServicesService} from '../services.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;
  dataTakenChecker = false;
  Mapiniter = false;
  constructor(private messageService:MessageServiceService,private service:ServicesService) {


    this.messageService.currentMessage.subscribe((message)=>{
      

      if(message !==  "default message"){
        this.dataTakenChecker = true;
      }
      
      this.service.getCountryData(message).subscribe((data:any)=>{
        console.log(data[0] , "mappp dataaa");
        if(!this.Mapiniter){
          this.initMap();
          this.Mapiniter=true;
        }

        this.loadMap();
        this.map.panTo(new L.LatLng(data[0].Lat, data[0].Lon));

      })



    })


   }

  ngOnInit(){
    
  }

  ngAfterViewInit(): void {

   this.loadMap()


  }


  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 4.5
    });
  }


  loadMap() {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Alvi'
    });
    
    tiles.addTo(this.map);
  }

  
}