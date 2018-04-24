import reducer from './reducer';

describe('auth', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return unchanged state with non-existing action', () => {
    const initialState = [{
      field: 'value',
    }];
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
