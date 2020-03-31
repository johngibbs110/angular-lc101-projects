import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   frustrationInactive: boolean = false;
   catchMe: boolean = false;

   constructor() { }

   ngOnInit() { }

   resetButtons() {
      this.goldInactive = false;
      this.silverInactive = false;
      this.copperInactive = false;
   }

   restartFrustration() {
      this.frustrationInactive = false;
   }

}
