import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.css']
})
export class DataChartsComponent implements OnInit {

  dataTakenChecker = false;

  constructor(private messageService:MessageServiceService) { 

    this.messageService.currentMessage.subscribe((message)=>{


      if(message !==  "default message"){
        this.dataTakenChecker = true;
      }
     


    })


  }

  ngOnInit(): void {
  }

}
