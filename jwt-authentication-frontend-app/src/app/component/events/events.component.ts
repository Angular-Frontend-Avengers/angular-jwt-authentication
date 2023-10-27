import { Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Events } from './events.model';
import EventsService from '../../service/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  protected static events: Events[] = [];

  constructor(private eventsService: EventsService) {}

  // fetch events
  ngOnInit(): void {
    const eventsResponseObserver: Partial<Observer<Object>> = {
      next(eventsAPIResponse) {
        EventsComponent.events = eventsAPIResponse as Events[];
      },
      error(err) {
        console.error(`Error in fetching the events: ${JSON.stringify(err)}`);
      },
    };
    this.eventsService.getEvents().subscribe(eventsResponseObserver);
  }
}
