const data_after_submit = innerdata => {
  return { type: 'OPENING_STOCK_DATA_AFTER_SUBMIT', data: innerdata };
};

const data_after_submit_loading = loading => {
  return { type: 'OPENING_STOCK_DATA_AFTER_SUBMIT_LOADING', data: loading };
};

const store_data = data => {
  return { type: 'OPENING_STORE_DATA', data: data };
};

export { data_after_submit, data_after_submit_loading, store_data };
