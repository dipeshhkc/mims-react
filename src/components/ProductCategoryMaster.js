import React, { Component, Fragment } from 'react';
import QuickAccess from './shared/QuickAccess';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import DataTable from './shared/DataTable';

class ProductCategoryMaster extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    console.log('working');
    axios
      .get('/product_category?estate=1')
      .then(response => {
        let filter_data = response.data.data.map(each => {
          return [each.id, each.code, each.name, each.valuation_method];
        });

        this.setState({ data: filter_data });
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {});
  }

  render() {
    const columns = ['S.N.', 'Code', 'Name', 'Validation Method'];

    return (
      <Fragment>
        <Grid container spacing={5}>
          <Grid item sm={2}>
            <QuickAccess />
          </Grid>
          <Grid item sm={9}>
            <DataTable data={this.state.data} columns={columns} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default ProductCategoryMaster;
