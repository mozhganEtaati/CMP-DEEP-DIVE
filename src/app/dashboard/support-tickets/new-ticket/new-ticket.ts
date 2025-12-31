import { afterEveryRender, afterNextRender, AfterViewInit, Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control,FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket 
{
  add= output<{title:string; text:string}>();
 //implements AfterViewInit {
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // @ViewChild('form') form?:ElementRef<HTMLFormElement>
  //  private form3=viewChild.required<ElementRef<HTMLFormElement>>('form');

  //  constructor(){
  //   // Log the form element after every render cycle
  //   afterEveryRender(() => {
  //     console.log(this.form3);
  //   });
  //   // Log the form element after the next render cycle
  //   afterNextRender(() => {
  //     console.log(this.form3);
  //   });
  // }
  
  // ngAfterContentInit(): void {
  //   console.log(this.form3);
  // }

onSubmit(title: string,ticketText:string){
  this.add.emit({title:title,text:ticketText});
 // this.form?.nativeElement.reset();
}
}
