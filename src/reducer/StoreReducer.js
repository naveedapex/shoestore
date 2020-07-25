const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DEL":
      return state.filter((i) => {
        return i.key !== action.payload.key;
      });
    default:
      return state;
  }
};

export default StoreReducer;
