import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

// application routes
const routes: Routes = [
  {
    path: '', // route for root path
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    path: 'login', // route for login
    component: LoginComponent,
  },
  {
    path: 'register', // route for register
    component: RegisterComponent,
  },
  {
    path: 'events', // route for events
    component: EventsComponent,
  },
  {
    path: 'special', // route for special events
    component: SpecialEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
