import { Component, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/card.interface';
import { CardService } from '../../services/card.service';


@Component({
  selector: 'app-by-cardset',
  templateUrl: './by-cardset.component.html'
})
export class ByCardsetComponent implements OnInit {
  data  : Datum[] = [];
  targetSearch : string = '';
 

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }


   search( targetSearch: string ) {
    console.log("search de card set componet");

    this.targetSearch  = targetSearch;

    this.cardService.searchCardSet( targetSearch )
      .subscribe( (cards) => {
        console.log(cards);
        this.data = cards.data;
        
      });

  }



}
