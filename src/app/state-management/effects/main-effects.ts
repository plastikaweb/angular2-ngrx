import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import {AngularFire} from 'angularfire2';

@Injectable()
export class MainEffects {

  @Effect() update$ = this.action$
    .ofType('SUPER_SIMPLE_EFFECT')
    .switchMap(() =>
      Observable.of({type: 'SUPER_SIMPLE_EFFECT_HAS_FINISHED'})
    );

  @Effect() effectWithPayloadExample$ = this.action$
    .ofType('SEND_PAYLOAD_TO_EFFECT')
    .map(toPayload)
    .switchMap(payload => {
      console.log('the payload was: ' + payload.message);
      return Observable.of({
        type: 'PAYLOAD_EFFECT_RESPONDS',
        payload: {
          message: 'The effect says hi!'
        }
      });
    });

  @Effect() timeEffect = this.action$
    .ofType('SET_TIMER')
    .map(toPayload)
    .switchMap(payload =>
      Observable.timer(payload.seconds * 1000)
        .switchMap(() =>
          Observable.of({type: 'TIMER_FINISHED'})
        )
    );

  @Effect() pullArrayFromFirebase$ = this.action$
    .ofType('PULL_ARRAY_FROM_FIREBASE')
    .switchMap(() =>
      this.af.database.list('/rooms')
        .switchMap(result =>
          Observable.of({type: 'GOT_FIREBASE_ARRAY', payload: {pulledArray: result}})
        )
    );

  @Effect() pullObjectFromFirebase$ = this.action$
    .ofType('PULL_OBJECT_FROM_FIREBASE')
    .switchMap(() =>
      this.af.database.object('/rooms')
        .switchMap(result =>
          Observable.of({type: 'GOT_FIREBASE_OBJECT', payload: {pulledObject: result}})
        )
    );

  constructor(private action$: Actions, private af: AngularFire) {
  }
}
