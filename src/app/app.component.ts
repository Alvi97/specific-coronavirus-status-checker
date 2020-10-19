import { Component } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracker';

  constructor(private messageService:MessageServiceService) { 

    this.messageService.currentMessage.subscribe((message)=>{


      setTimeout(()=>{
        if(message !==  "default message"){
          window.scrollTo({
            top: 400,
            left: 100,
            behavior: 'smooth'
          });
        }
      },250)


    
     


    })


  }

}
