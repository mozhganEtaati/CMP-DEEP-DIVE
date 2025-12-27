import { Component, Input, input } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus = 'online';
}
