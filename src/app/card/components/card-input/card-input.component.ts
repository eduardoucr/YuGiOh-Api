import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html'
})
export class CardInputComponent  implements OnInit{
  ngOnInit(): void {
   this.debouncer
   .pipe(debounceTime(300))
   .subscribe(valor=>{
    this.onDebounce.emit(valor);

   })
  }

  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();
  @Input() placeholder: string = '';
  @Input() name: string = '';
  
  constructor() { 
  
 }

  debouncer: Subject<string>= new Subject();
  targetSearch: string = '';

  search(){
  this.onEnter.emit(this.targetSearch);

  }
  teclaPresionada(event: any){
 this.debouncer.next(this.targetSearch);
  }

}
