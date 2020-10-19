import { Component, OnInit ,ElementRef} from '@angular/core';
import {ServicesService} from '../services.service'
import {MessageServiceService} from '../message-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {

  message:string;
  constructor(private service:ServicesService,
    private mesageService:MessageServiceService,private _el: ElementRef) { }

  countries = [];

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data:any)=>{
      data.forEach(element => {
        this.countries.push(element.country);
      });

      this.countries.sort();
    })

    this.mesageService.currentMessage.subscribe(message => this.message = message)
    console.log(this.countries , "counrr")
  }

  applySelectFilter(event){
    // this.mesageService.sendClickEvent();
    this.mesageService.changeMessage(event.value);
    this.scrollToBottom();
    }

  selectedValue: string;
  selectedCar: string;

  public scrollToBottom() {
    const el: HTMLDivElement = this._el.nativeElement;
    el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
  }


}
