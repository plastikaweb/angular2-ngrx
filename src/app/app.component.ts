import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './state-management/state/main-state';
import {INCREMENT} from './state-management/actions/main-action-creator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  countText = '';
  displayText = '';

  constructor(private store: Store<State>) {
    this.store.select('mainReducer')
      .subscribe((data: State) => {
        this.countText = 'counter is ' + data.counter;
        this.displayText = 'text is ' + data.displayText;
      });

    // this.store.dispatch({type: INCREMENT, payload: {text: 'derp!', temp: 'hola!'}});
    // this.store.dispatch({type: 'SUPER_SIMPLE_EFFECT', payload: {seconds: 2}});
    // this.store.dispatch({type: 'SET_TIMER', payload: {seconds: 2}});
    // this.store.dispatch({type: 'SEND_PAYLOAD_TO_EFFECT', payload: {message: 'The component says hello!'}});
    // this.store.dispatch({type: 'PULL_ARRAY_FROM_FIREBASE'});
    this.store.dispatch({type: 'PULL_OBJECT_FROM_FIREBASE'});
  }
}
