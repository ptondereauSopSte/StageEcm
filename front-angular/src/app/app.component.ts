import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zero-xp';

  isModalLoggingActive = false;
  subscriptionIsModalLoggingActive: Subscription;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.subscriptionIsModalLoggingActive = this.globalService.isModalLoggingActiveSubject.subscribe(
      (isModaleActive: boolean) => {
        this.isModalLoggingActive = isModaleActive;
      }
    );
  }
}
