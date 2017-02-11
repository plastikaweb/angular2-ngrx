import {ActionReducer, Action} from "@ngrx/store";
import {State, initialState} from "../state/main-state";
import {INCREMENT, EVENT_FROM_EFFECT} from "../actions/main-action-creator";

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
      default: {
        return state;
      }
    }
  };
