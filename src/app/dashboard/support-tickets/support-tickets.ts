import { Component } from '@angular/core';
import { Ticket } from "./ticket/ticket";

@Component({
  selector: 'app-support-tickets',
  imports: [Ticket],
  templateUrl: './support-tickets.html',
  styleUrl: './support-tickets.css',
})
export class SupportTickets {

}
