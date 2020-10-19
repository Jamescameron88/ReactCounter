const initialState = {
  count: 0,
  countTwo:0,
  num: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        countTwo: state.countTwo + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        countTwo: state.countTwo + 1
      };
      case 'input_VALUE':
        console.log(action.count)
      return {
        ...state,
        num: action.count
      };
      case 'UPDATE':
        return {
          ...state,
          count: parseInt(state.num),
          countTwo: state.countTwo = 0
        };
      default:
      return state;
  }
};

export default counterReducer;