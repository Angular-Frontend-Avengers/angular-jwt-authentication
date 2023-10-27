import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() date: string;

  constructor() {
    this.name = '';
    this.description = '';
    this.date = '';
  }

  protected formatEventDate(timestamp: string) {
    return new Date(timestamp).toLocaleDateString();
  }

}
