import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Event from 'src/app/api_response/events/event';
import RouteConstants from '../routes';

@Injectable({
  providedIn: 'root',
})
export default class EventsService {
  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<Object> {
    return this.httpClient.get<Event>(
      `${RouteConstants.BACKEND_HOST}${RouteConstants.API_ROUTE}${RouteConstants.EVENTS}`
    );
  }
}
