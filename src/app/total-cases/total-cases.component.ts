import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service'


@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.css']
})
export class TotalCasesComponent implements OnInit {


  cases;
  deaths;
  recovered;

  constructor(private service:ServicesService) { }

  ngOnInit(): void {

    this.service.getGeneralData().subscribe((data:any)=>{
      this.cases=data.cases;
      this.deaths = data.deaths;
      this.recovered = data.recovered;
      console.log(data)
    })



  }

}
