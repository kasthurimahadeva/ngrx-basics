import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Store, select } from '@ngrx/store';
// import { increment, decrement, reset } from '../counter.actions';
import * as CounterActions from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<{count: number}>) {
    this.count$ = this.store.pipe(select('count'));
   }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
