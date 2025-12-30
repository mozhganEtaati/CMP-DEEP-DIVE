import { Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
   host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
label = input.required<string>();
el = inject(ElementRef);
@ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
private control1 = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
    console.log(this.control1());
  }
}
