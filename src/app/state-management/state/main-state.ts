export interface State {
  counter: number;
  displayText: string;
}

export const initialState: State = {
  counter: 10,
  displayText: 'loading...'
};
