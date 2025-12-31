import { Component, DestroyRef, effect, inject, Input, input, OnDestroy, OnInit, signal, Signal } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {

  currentStatus = signal<'online'|'offline'|'unknown'>('offline');
  destroyRef= inject(DestroyRef);

  constructor(){
    //this is the effect explaination
    //Initial execution: The effect runs immediately when created, logging the current value of currentStatus()
    //Dependency tracking: Angular automatically detects that the effect depends on the currentStatus signal
    //Re-execution: Whenever currentStatus changes, the effect automatically re-runs and logs the new value
    effect(()=>{
      console.log(this.currentStatus());
    });
  }
  ngOnInit(){
    const intervalId = setInterval(()=>{
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus.set('online');
      }
      else if(rnd <0.9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unknown');
      }
    },5000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(intervalId);
    });
  }
}
