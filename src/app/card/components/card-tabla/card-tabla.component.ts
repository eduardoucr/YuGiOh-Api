import { Component, Input, OnInit } from '@angular/core';

import { Datum } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-tabla',
  templateUrl: './card-tabla.component.html',
  styles: [
  ]
})
export class CardTablaComponent implements OnInit {

  @Input() cards: Datum[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
