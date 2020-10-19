import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalCasesComponent } from './total-cases/total-cases.component';
import { ChartsModule } from 'ng2-charts';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { MapComponent } from './map/map.component';
import { CasesTodayComponent } from './cases-today/cases-today.component';
import {CasesPerMillionComponent} from './cases-per-million/cases-per-million.component';
import { DataChartsComponent } from './data-charts/data-charts.component'

@NgModule({
  declarations: [
    AppComponent,
    TotalCasesComponent,
    CountryDropdownComponent,       
    DoughnutChartComponent,
    MapComponent,
    CasesTodayComponent,
    CasesPerMillionComponent,
    DataChartsComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
