import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Yugiohcard } from '../interfaces/card.interface';
import { Cardset } from '../interfaces/cardset.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl: string = 'https://db.ygoprodeck.com/api/v7';

  
  constructor( private http: HttpClient ) { }

  searchCard( targetSearch: string ): Observable<Yugiohcard> {
    const url = `${ this.apiUrl }/cardinfo.php?fname=${ targetSearch }`;
    return this.http.get<Yugiohcard>( url  );
  }

  searchRace( targetSearch: string ):Observable<Yugiohcard>{
    const url = `${ this.apiUrl }/cardinfo.php?race=${ targetSearch }`;
    return this.http.get<Yugiohcard>( url);
  }

  searchCardSet( targetSearch: string ):Observable<Yugiohcard>{
    const url = `${ this.apiUrl }/cardinfo.php?cardset=${ targetSearch }`;
    return this.http.get<Yugiohcard>( url);
  }


  getCardById( id: string ):Observable<Yugiohcard>{
    const url = `${ this.apiUrl }/cardinfo.php?id=${ id }`;
    return this.http.get<Yugiohcard>( url );
  }


  getCardsetAll( ):Observable<Cardset[]>{
    const url = `${ this.apiUrl }/cardsets.php`;
    return this.http.get<Cardset[]>( url );
  }


  
  searchAttribute( targetSearch: string ):Observable<Yugiohcard>{
    const httparams = new HttpParams()

    const url = `${ this.apiUrl }/cardinfo.php?attribute=${ targetSearch }`;
    return this.http.get<Yugiohcard>( url )
    .pipe(
      tap(console.log)
    )
  }

  
}
