import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { ServerStatus } from "./server-status/server-status";
import { SupportTickets } from "./support-tickets/support-tickets";
import { Traffic } from "./traffic/traffic";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ServerStatus, SupportTickets, Traffic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}



