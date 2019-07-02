const setLanguage = (lang, dispatch) => {
  dispatch({ type: 'LANGUAGE_CHANGE', data: lang });
};

const setKeyboard = (key, dispatch) => {
  dispatch({ type: 'KEYBOARD_CHANGE', data: key });
};

export { setLanguage, setKeyboard };
