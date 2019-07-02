const initialState = {
  lang: 'en',
  keyboard: 'english'
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LANGUAGE_CHANGE':
      return { ...state, lang: action.data };
    case 'KEYBOARD_CHANGE':
      return { ...state, keyboard: action.data };

    default:
      return { ...state };
  }
};
