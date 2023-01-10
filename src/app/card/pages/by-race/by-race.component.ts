import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Datum } from '../../interfaces/card.interface';

@Component({
  selector: 'app-by-race',
  templateUrl: './by-race.component.html'
})
export class ByRaceComponent  {

  targetSearch: string ='';
  hayError: boolean= false;
  cards: Datum[]=[];

  constructor(private cardService: CardService) {


   }

   search(targetSearch: string){
   
    this.hayError= false;
    this.targetSearch= targetSearch;

    this.cardService.searchRace(this.targetSearch)
    .subscribe((cards) =>{
    
      this.cards= cards.data;

    } ,(err=>{
this.hayError= true;
this.cards= [];

    }));
   }



}
