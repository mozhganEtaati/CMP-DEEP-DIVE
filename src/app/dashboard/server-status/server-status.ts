import { Component, DestroyRef, inject, Input, input, OnDestroy, OnInit } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {

  currentStatus : 'online'|'offline'|'unknown'='offline';
  destroyRef= inject(DestroyRef);
  ngOnInit(){
    const intervalId = setInterval(()=>{
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus ='online';
      }
      else if(rnd <0.9){
        this.currentStatus ='offline'
      }else{
        this.currentStatus = 'unknown'
      }
    },5000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(intervalId);
    });
  }
}
