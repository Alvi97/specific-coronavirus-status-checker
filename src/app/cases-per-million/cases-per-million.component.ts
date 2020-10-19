import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { ServicesService } from '../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cases-per-million',
  templateUrl: './cases-per-million.component.html',
  styleUrls: ['./cases-per-million.component.css']
})
export class CasesPerMillionComponent implements OnInit {

  displayChart = false;

  clickEventsubscription: Subscription;
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['brown', 'purple', 'blue'],
      borderColor: [
        'brown' , 'purple' , 'blue'
      ],
    },
  ];


  constructor(private service:ServicesService , private messageService:MessageServiceService) { 

    this.messageService.currentMessage.subscribe((message)=>{
      
      this.doughnutChartData = [];
      this.doughnutChartLabels = [];
      this.service.getSpecificCountryData(message).subscribe((data:any)=>{
        console.log("millliiooonnn " , data)
        this.doughnutChartLabels = [ 'Cases Per Million', 'Deaths Per Million' , 'Tests per Million'];
        this.doughnutChartData.push(data.casesPerOneMillion,data.testsPerOneMillion , data.testsPerOneMillion);

      })  



    })


  }

  ngOnInit(): void {
  }

}
