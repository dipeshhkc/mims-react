import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';

class asyncSelect extends Component {
  storecall(st) {
    console.log('cool');
    if (st != null) {
      axios
        .get(
          `store_transaction?store_id=${
            st.store_id
          }&opening_report=true&estate=1`
        )
        .then(response => {
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
          this.setState({ showTable: true });
        });
    } else {
      this.setState({ showTable: false });
    }
    innerdata = [];
    position = [];
  }

  render() {
    const filterdata = inputValue => {
      if (inputValue == '') {
        return [];
      } else {
        return data.filter(i => {
          return i.label
            .split(' ')
            .join('')
            .toLowerCase()
            .includes(
              inputValue
                .split(' ')
                .join('')
                .toLowerCase()
            );
        });
      }
    };

    const loadOptions = (inputValue, callback) => {
      if (inputValue != '' && inputValue.slice(-1) == ' ') {
        setTimeout(() => {
          callback(filterdata(inputValue));
        }, 1000);
      } else {
        callback();
      }
    };

    return (
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        isClearable={true}
        onChange={st => this.storecall(st)}
        // onInputChange={handleInputChange}
      />
    );
  }
}

export default asyncSelect;
