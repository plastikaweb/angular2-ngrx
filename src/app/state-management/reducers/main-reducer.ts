import {ActionReducer, Action} from '@ngrx/store';
import {State, initialState} from '../state/main-state';
import {INCREMENT, EVENT_FROM_EFFECT} from '../actions/main-action-creator';

export const mainReducer: ActionReducer<State> =
  (state: State = initialState, action: Action) => {
    console.log('Action! ' + action.type);

    switch (action.type) {
      case INCREMENT:
        console.log('the payload string is: ' + action.payload.text);
        console.log('temp: ' + action.payload.temp);
        return {
          counter: state.counter + 1,
          displayText: 'Increment action handled'
        };
      case EVENT_FROM_EFFECT:
        return {
          counter: 4,
          displayText: 'Event from event action handled'
        };
      case 'GOT_FIREBASE_ARRAY': {
        console.log('got array payload from effect: ' + action.payload.pulledArray);
        if (action.payload.pulledArray !== undefined) {

          let payloadArray = <Object[]>action.payload.pulledArray;
          console.log(payloadArray);
          console.log(payloadArray[0]);
        }

        return Object.assign(state);

      }

      case 'GOT_FIREBASE_OBJECT': {
        if (action.payload.pulledObject != undefined) {

          let payloadObject = <Object[]>action.payload.pulledObject;
          console.log(payloadObject);
          // console.log("first element is: " + payloadObject);

          // let newState = Object.assign(state);
          // newState.displayText = payloadObject['off_tha_top']['roomDetails']['description'];
          // console.log('got the display text: ' + newState.displayText);
          // return newState;

          return {
            counter: 4,
            displayText: payloadObject['description']
          };
        }

      }
      default: {
        return state;
      }
    }
  };
