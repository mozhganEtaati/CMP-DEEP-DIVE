import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { TicketModel } from './ticket.model';
import { Ticket } from "./ticket/ticket";

@Component({
  selector: 'app-support-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './support-tickets.html',
  styleUrl: './support-tickets.css',
})
export class SupportTickets {
  tickets: TicketModel[]=[];

  onAdd(ticketData:{title:string; text:string}){
    const ticket:TicketModel={
      id:Math.random().toString(),
      title:ticketData.title,
      request:ticketData.text,
      status:'open'
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id == id) {
        return { ...ticket, status: 'closed' };
      }

      return ticket;
    });
  }
}
