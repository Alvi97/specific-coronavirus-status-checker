import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageServiceService } from '../message-service.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-cases-today',
  templateUrl: './cases-today.component.html',
  styleUrls: ['./cases-today.component.css']
})
export class CasesTodayComponent implements OnInit {

  displayChart = false;

  clickEventsubscription: Subscription;
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['blue', 'black', '#282140'],
      borderColor: [
        'blue',
        'black',
      ],
    },
  ];

  constructor(private service:ServicesService , private messageService:MessageServiceService) { 

    this.messageService.currentMessage.subscribe((message)=>{
      
      this.doughnutChartData = [];
      this.doughnutChartLabels = [];
      this.service.getSpecificCountryData(message).subscribe((data:any)=>{
        console.log("new compoennettt " , data)
        this.doughnutChartLabels = [ 'Today Cases', 'Today Deaths'];
        if(data.todayCases == 0 && data.todayDeaths==0){

        }
        else{
          this.displayChart= true;
          this.doughnutChartData.push(data.todayCases,data.todayDeaths);
          console.log(this.doughnutChartData , "aaa")
        }

      })  



    })


  }

  ngOnInit(): void {


  }

  ngAfterViewInit(){

  }

}
