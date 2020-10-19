import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'
import { Subscription } from 'rxjs';
import {MessageServiceService} from '../message-service.service'
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  displayChart=false;
  clickEventsubscription: Subscription;
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#fc5858', '#19d863', '#282140'],
      borderColor: [
        'rgba(252, 88, 88, 1)',
        'rgba(25, 216, 99, 1)',
        'rgba(40, 33, 64, 1)'
      ],
    },
  ];

  constructor(private service:ServicesService , private messageService:MessageServiceService) { 

    this.messageService.currentMessage.subscribe((message)=>{
      this.displayChart = true;
      this.doughnutChartData = [];
      this.doughnutChartLabels = [];
      this.service.getSpecificCountryData(message).subscribe((data:any)=>{
        this.doughnutChartLabels = [ 'Active Cases', 'Total Deaths', 'Total Recovered'];
        this.doughnutChartData.push(data.active,data.deaths,data.recovered);
        console.log(this.doughnutChartData , "aaa")
      })



    })


  }

  ngOnInit(): void {


  }

  ngAfterViewInit(){

  }

}
