import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
  faveLinks = ['https://www.theatlantic.com/', 'https://www.theringer.com/'];

  constructor() { }

  ngOnInit() {
  }

}
