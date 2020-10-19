import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private subject = new Subject<any>();


  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }


}
