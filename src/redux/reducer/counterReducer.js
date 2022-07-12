const initState = { value: 0 };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "In":
      return { ...state, value: state.value + 1 };
    case "De":
      return { ...state, value: state.value - 1 };
    case "Vl":
      return { ...state, value: state.value + Number(action.payload) };
    default:
      return state;
  }
};

export default counterReducer;
