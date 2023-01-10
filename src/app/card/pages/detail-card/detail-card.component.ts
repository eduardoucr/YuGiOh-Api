import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CardService } from '../../services/card.service';
import {  Datum } from '../../interfaces/card.interface';


@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styles:[
    `
    span{
      margin-right: 7px;
    }
    `
    
]

  
})
export class DetailCardComponent implements OnInit {

  card!: Datum;


  constructor( 
    private activatedRoute: ActivatedRoute,
    private cardService: CardService
    
    
    ) { }

  ngOnInit(): void {

this.activatedRoute.params
.pipe(

  switchMap( ({id})=> this.cardService.getCardById(id)),
  tap(console.log)
)
.subscribe(card=> this.card = card.data[0]);


  }

}
