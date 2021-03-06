import { Component, OnInit, ContentChildren, QueryList, HostBinding } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @HostBinding('class.flip') flipped = false;
  constructor() { }

  ngOnInit() { }

}
