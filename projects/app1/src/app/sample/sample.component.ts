import { Component, OnInit } from '@angular/core';
import { MessageBusService } from 'projects/message-bus/src/public-api';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  title = 'app1 SimpleComent[init]';

  data: any = {};

  count = 0;

  outputSubject = new BehaviorSubject('app1 init!!!');

  constructor(private messageBus: MessageBusService) {
    this.messageBus.event
      .subscribe((msg: any) => {
        debugger
        console.debug('msg receibed in app1', msg);
      });
  }

  ngOnInit(): void {
  }

  transToShell() {
    this.count++;
    this.outputSubject.next(`shell receive ${this.count}`);
  }

}
