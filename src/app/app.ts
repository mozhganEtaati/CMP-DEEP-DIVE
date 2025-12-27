import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { ServerStatus } from "./dashboard/server-status/server-status";
import { SupportTickets } from "./dashboard/support-tickets/support-tickets";
import { Traffic } from "./dashboard/traffic/traffic";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ServerStatus, SupportTickets, Traffic, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}



