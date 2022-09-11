
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageBusService } from 'projects/message-bus/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(
    private router: Router,
    private messageBus: MessageBusService
  ) {
    this.messageBus.event.next('What the fuck');
  }

  ngOnInit() {
    this.messageBus.event.subscribe(msg => {
      console.log('shell get ' + msg);
    });
  }

  navi() {
    this.router.navigate(['/sample/component']);
  }

}
