import { Component } from '@angular/core';
import { Datum } from '../../interfaces/card.interface';
import { CardService } from '../../services/card.service';


@Component({
  selector: 'app-by-attribute',
  templateUrl: './by-attribute.component.html',
  styles:[
      `
      button{
        margin-right: 7px;
      }
      `
  ]
})
export class ByAttributeComponent  {
  

  attributes:  string[]=['DARK', 'DIVINE', 'EARTH', 'FIRE', 'LIGHT','WATER', 'WIND'];
  attributeActivate: string = '';
  cards: Datum[]=[];
  messageAlert: boolean= false;

  constructor(private cardService: CardService) { 

  }

  getClassCSS(attribute:string) :string{
    this.messageAlert=false;
    return (attribute ===this.attributeActivate) ?'btn btn-primary': 'btn btn-outline-primary';

  }
  triggerAttribute(attribute: string){
    this.messageAlert=true;

    if(attribute===this.attributeActivate){return;}
    
    this.attributeActivate= attribute;
    this.cards=[];

    this.cardService.searchAttribute(attribute)
    .subscribe(cards=> this.cards= cards.data);

   
  }

  
}
