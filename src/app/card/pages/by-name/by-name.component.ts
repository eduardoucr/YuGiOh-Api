import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import {  Datum } from '../../interfaces/card.interface';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styles: [
    `
    li{
      cursor: pointer

    }
    `
  ]
})
export class ByNameComponent {

  targetSearch : string = '';
  hayError: boolean = false;
  data  : Datum[] = [];
  dataSuggested  : Datum[] = [];
  showSuggestions:boolean=false;

  constructor( private cardService: CardService ) { }

  search( targetSearch: string ) {
    this.showSuggestions=false;
    this.hayError = false;
    this.targetSearch  = targetSearch;

    this.cardService.searchCard( targetSearch )
      .subscribe( (cards) => {
        console.log(cards);
        this.data = cards.data;
        
      }, (err) => {
        this.hayError = true;
        this.data   = [];
      });

  }

  suggestions( targetSearch: string ) {
    this.hayError = false;
    this.targetSearch= targetSearch;
    this.showSuggestions=true;

    this.cardService.searchCard(targetSearch)
    .subscribe(cards=> this.dataSuggested= cards.data.splice(0,6),
    
    (err)=>this.dataSuggested=[])
  }

  searchSugerido( targetSearch: string){
    this.search(targetSearch);
   

  }

}
