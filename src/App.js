import React from 'react';
import Menu from './components/Menu';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductCategoryMaster from './components/ProductCategoryMaster';
import OpeningStock from './components/OpeningStock';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages_ne from './translations/ne.json';
import messages_en from './translations/en.json';

const messages = {
  ne: messages_ne,
  en: messages_en
};

class App extends React.Component {
  constructor() {
    super();
    axios.defaults.baseURL = 'http://mims.dom/api/v1';
  }

  render() {
    return (
      <IntlProvider
        defaultLocale="en"
        locale={this.props.getLanguage}
        messages={messages[this.props.getLanguage]}
      >
        <div>
          <Router basename="/frontend">
            <Menu />

            {/* masters */}
            <Route
              path="/masters/product-category-master"
              component={ProductCategoryMaster}
            />
            <Route
              path="/masters/chart-of-items"
              render={() => <h2> product category master hai</h2>}
            />
            <Route
              path="/masters/vendor-master"
              render={() => <h2> product category master hai</h2>}
            />
            <Route
              path="/masters/customer-master"
              render={() => <h2> product category master hai</h2>}
            />
            <Route
              path="/masters/bill-of-material"
              render={() => <h2> product category master hai</h2>}
            />
            <Route
              path="/masters/bill-sundry"
              render={() => <h2> product category master hai</h2>}
            />
            {/* transaction */}
            <Route path="/transaction/opening-stock" component={OpeningStock} />
            <Route
              path="/transaction/requisition"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/import-good-receipt-note"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/local-good-receipt-note"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/direct-grn"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/purchase-order"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/material-issue"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/production-voucher"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/stock-journal"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/sales"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/store-transfer"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/issue-return"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/purchase-return"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/transaction/sales-return"
              render={() => <h2> opeining stock hai</h2>}
            />
            {/* Reports */}

            <Route
              path="/reports/cost-of-materials"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/stock-report"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/stock-ledger"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/opening-report"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/current-fifo-report"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/daily-store-log"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/store-items"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/goods-receipt-report"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/material-issue-report"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/po"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/po-direct"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/production-voucher-report"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/party-wise-sales-under-reports"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/reports/sales-report"
              render={() => <h2> opeining stock hai</h2>}
            />

            {/* setup */}

            <Route
              path="/setup/estate"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/setup/fiscal-year"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/setup/inventory-setup"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/setup/store-master"
              render={() => <h2> opeining stock hai</h2>}
            />

            {/* utility */}

            <Route
              path="/utility/manage-users"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/utility/manage-roles"
              render={() => <h2> opeining stock hai</h2>}
            />
            <Route
              path="/utility/manage-permissions"
              render={() => <h2> opeining stock hai</h2>}
            />
          </Router>{' '}
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    getLanguage: state.menu.lang
  };
};

export default connect(mapStateToProps)(App);
