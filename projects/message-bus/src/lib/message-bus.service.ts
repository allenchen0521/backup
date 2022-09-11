import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  public event = new BehaviorSubject<string>('init');

  constructor() { }
}
