import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ByRaceComponent } from './pages/by-race/by-race.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByAttributeComponent } from './pages/by-attribute/by-attribute.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { RouterModule } from '@angular/router';
import { CardTablaComponent } from './components/card-tabla/card-tabla.component';
import { CardInputComponent } from './components/card-input/card-input.component';
import { CardComboComponent } from './components/card-dropdown/card-dropdown.component';
import { ByCardsetComponent } from './pages/by-cardset/by-cardset.component';



@NgModule({
  declarations: [
    ByRaceComponent,
    ByNameComponent,
    ByAttributeComponent,
    ByCardsetComponent,
    DetailCardComponent,
    CardTablaComponent,
    CardInputComponent,
    CardComboComponent,
    CardComboComponent,
    ByCardsetComponent
  ],
  exports: [
    ByRaceComponent,
    ByNameComponent,
    ByAttributeComponent,
    ByCardsetComponent,
    DetailCardComponent
  ],


  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CardModule { }
