import { store } from '../index.js';
import {
  data_after_submit,
  data_after_submit_loading,
  store_data
} from '../store/action/OpeningStock';

let innerdata = [];
let position = [];

export const innerStoreData = response => {
  innerdata = [];
  position = [];
  console.log('coming coming');
  response.data.items.forEach(each => {
    position.push(each.length);
    each.forEach(item => {
      // console.log(item)
      innerdata.push([item.name]);
    });
  });

  response.data.category.forEach((each, index) => {
    if (index == 0) {
      for (let i = 0; i < position[index]; i++) {
        innerdata[i].unshift(each.name);
      }
    } else {
      for (
        let i = position[index - 1];
        i < position[index - 1] + position[index];
        i++
      ) {
        innerdata[i].unshift(each.name);
      }
    }
  });

  response.data.opening.forEach((each, index) => {
    each.forEach(item => {
      innerdata[index].push(
        item.quantity == null ? 0 : item.quantity.toFixed(2),
        item.quantity != null && item.total != null
          ? (item.total / item.quantity).toFixed(2)
          : 0,
        item.total == null ? 0 : parseFloat(item.total).toFixed(2)
      );
    });
  });
  console.log(innerdata);
  store.dispatch(data_after_submit(innerdata));
  store.dispatch(data_after_submit_loading(true));
};

export const storeData = response => {
  console.log('coming coming');

  let filter_data = response.data.data.map(each => {
    return { value: each.name, label: each.name, store_id: each.id };
  });
  console.log(filter_data);
  // this.setState({ data: filter_data });
  // data = filter_data;
  store.dispatch(store_data(filter_data));
};
