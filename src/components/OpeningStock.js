import React, { Component, Fragment } from 'react';
import QuickAccess from './shared/QuickAccess';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import DataTable from './shared/DataTable';
import { connect } from 'react-redux';
import Nepali from './shared/nepali';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
// import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { get } from '../api/index';
import TextField from '@material-ui/core/TextField';
import { data_after_submit_loading } from '../store/action/OpeningStock';

const columns = ['Type', 'Item', 'Qty', 'Rate', 'Amt'];

class OpeningStock extends Component {
  state = {
    inputValue: ''
  };

  storecall(st) {
    console.log('cool');
    console.log(st);
    if (st != null) {
      get(
        `store_transaction?store_id=${
          st.store_id
        }&opening_report=true&estate=1`,
        'OpeningStock',
        'innerStoreData'
      );
    } else {
      this.props.loading(false);
    }
  }

  componentDidMount() {
    console.log('la hai la');
    console.log(__dirname);
    get('/store?limit=all&limit=all&estate=1', 'OpeningStock', 'storeData');
  }

  render() {
    const filterdata = inputValue => {
      return this.props.data.filter(i => {
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
      <Fragment>
        <Grid container spacing={5}>
          <Grid item sm={2}>
            <QuickAccess />
          </Grid>
          <Grid item sm={8}>
            Store:{this.state.inputValue}
            <AsyncSelect
              // cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              isClearable={true}
              onChange={st => this.storecall(st)}
              // onInputChange={handleInputChange}
            />{' '}
            <br />
            <br />
            {this.props.showTable && (
              <DataTable data={this.props.innerdata} columns={columns} />
            )}{' '}
            {this.props.keyboard != 'english' ? (
              <Nepali funcname={this.props.keyboard} />
            ) : (
              <TextField
                id="outlined-name"
                label={this.props.keyboard}
                margin="normal"
                variant="outlined"
              />
            )}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    innerdata: state.opening.innerdata,
    data: state.opening.data,
    keyboard: state.menu.keyboard,
    showTable: state.opening.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loading: loading => dispatch(data_after_submit_loading(loading))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpeningStock);
