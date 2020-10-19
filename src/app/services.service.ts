import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }



  getGeneralData(){
    return this.http.get("https://coronavirus-19-api.herokuapp.com/all");
  }

  getCountryData(country){
    return this.http.get(`https://api.covid19api.com/country/${country}`);
  }

  getAllCountries(){
    return this.http.get(`https://coronavirus-19-api.herokuapp.com/countries`);
    
  }

  getSpecificCountryData(country){
    return this.http.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
  }


}



 