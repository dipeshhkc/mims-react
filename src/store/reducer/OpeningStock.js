const initialState = {};

export const openingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPENING_STOCK_DATA_AFTER_SUBMIT':
      return { ...state, innerdata: action.data };
    case 'OPENING_STOCK_DATA_AFTER_SUBMIT_LOADING':
      return { ...state, loading: action.data };
    case 'OPENING_STORE_DATA':
      return { ...state, data: action.data };

    default:
      return { ...state };
  }
};
