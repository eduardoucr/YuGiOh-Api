import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Cardset } from '../../interfaces/cardset.interface';

@Component({
  selector: 'app-card-dropdown',
  templateUrl: './card-dropdown.component.html'
})
export class CardComboComponent implements OnInit {
  cardSets: Cardset[]=[];
  targetSearch: string = '';
  messageAlert: boolean= true;

  constructor( private cardService: CardService ) {
    this.getCardSetAll()
   }


   @Output() onChange: EventEmitter<string>= new EventEmitter();


   ngOnInit(): void {

   
   }

 search(){
     this.onChange.emit(this.targetSearch);
  }

  getCardSetAll(){
    this.cardService.getCardsetAll(  )
    .subscribe( (cardSets) => {
   
      this.cardSets = cardSets;
     
    });
  }
}
