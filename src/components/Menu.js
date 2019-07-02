import React from 'react';
import '../App.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { setLanguage, setKeyboard } from '../store/action/menu';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class Menu extends React.Component {
  componentDidMount() {
    $(function() {
      $('#main-menu').smartmenus();
    });
  }

  render() {
    return (
      <nav id="main-nav">
        <ul id="main-menu" style={{ cursor: 'pointer' }} className="sm sm-blue">
          <li>
            <a>
              {' '}
              <i
                className="fa fa-indent"
                style={{ float: 'left', marginRight: '5px' }}
              />
              {/* Masters */}
              <FormattedMessage id="app.master" defaultMessage="Master" />
            </a>

            <ul>
              <li>
                <Link to="/masters/product-category-master">
                  ProductCategoryMaster
                </Link>
              </li>
              <li>
                <Link to="/masters/chart-of-items">ChartofItems</Link>
              </li>
              <li>
                <Link to="/masters/vendor-master">VendorMaster</Link>
              </li>
              <li>
                <Link to="/masters/customer-master">CustomerMaster</Link>
              </li>

              <li>
                <Link to="/masters/bill-of-material">BillOfMaterial</Link>
              </li>
              <li>
                <Link to="/masters/bill-sundry">BillSundry</Link>
              </li>
            </ul>
          </li>

          <li>
            <a>
              {' '}
              <i
                className="fa fa-money-check"
                style={{ float: 'left', marginRight: '5px' }}
              />
              {/* Transaction{' '} */}
              <FormattedMessage
                id="app.transaction"
                defaultMessage="Transaction"
              />
            </a>

            <ul>
              <li>
                <Link to="/transaction/opening-stock">OpeningStock</Link>
              </li>
              <li>
                <Link to="/transaction/requisition">Requisition/Indents</Link>
              </li>
              <li>
                <Link to="/transaction/import-good-receipt-note">
                  ImportGoodReceiptNote
                </Link>
              </li>
              <li>
                <Link to="/transaction/local-good-receipt-note">
                  LocalGoodReceiptNote
                </Link>
              </li>
              <li>
                <Link to="/transaction/direct-grn">DirectGRN</Link>
              </li>
              <li>
                <Link to="/transaction/purchase-order">PurchaseOrder(Req)</Link>
              </li>

              <li>
                <Link to="/transaction/material-issue">MaterialIssue</Link>
              </li>
              <li>
                <Link to="/transaction/production-voucher">
                  ProductionVoucher
                </Link>
              </li>
              <li>
                <Link to="/transaction/stock-journal">StockJournal</Link>
              </li>
              <li>
                <Link to="/transaction/sales">Sales</Link>
              </li>
              <li>
                <Link to="/transaction/store-transfer">StoreTransfer</Link>
              </li>
              <li>
                <Link to="/transaction/purchase-return">PurchaseReturn</Link>
              </li>
              <li>
                <Link to="/transaction/issue-return">IssueReturn</Link>
              </li>
              <li>
                <Link to="/transaction/sales-return">SalesReturn</Link>
              </li>
            </ul>
          </li>

          <li>
            <a>
              {' '}
              <i
                className="fa fa-book"
                style={{ float: 'left', marginRight: '5px' }}
              />
              {/* Reports{' '} */}
              <FormattedMessage id="app.report" defaultMessage="Reports" />
            </a>

            <ul>
              <li>
                <Link to="/reports/cost-of-materials">CostOfMaterials</Link>
              </li>
              <li>
                <Link to="/reports/stock-report">StockReport</Link>
              </li>
              <li>
                <Link to="/reports/stock-ledger">StockLedger</Link>
              </li>
              <li>
                <Link to="/reports/opening-report">OpeningReport</Link>
              </li>
              <li>
                <Link to="/reports/current-fifo-report">CurrentFifoReport</Link>
              </li>
              <li>
                <Link to="/reports/daily-store-log">DailyStoreLog</Link>
              </li>
              <li>
                <Link to="/reports/store-items">StoreItems(Stock)</Link>
              </li>
              <li>
                <Link to="/reports/goods-receipt-report">
                  GoodsReceiptReport
                </Link>
              </li>
              <li>
                <Link to="/reports/material-issue-report">
                  MaterialIssueReport
                </Link>
              </li>
              <li>
                <Link to="/reports/po">PO(with Requisition)</Link>
              </li>
              <li>
                <Link to="/reports/po-direct">PODirect</Link>
              </li>
              <li>
                <Link to="/reports/production-voucher-report">
                  ProductionVoucherReport
                </Link>
              </li>
              <li>
                <Link to="/reports/party-wise-sales-under-reports">
                  PartywiseSalesUnderReports
                </Link>
              </li>
              <li>
                <Link to="/reports/sales-report">SalesReport</Link>
              </li>
            </ul>
          </li>

          <li>
            <a>
              <i
                className="fa fa-wrench"
                style={{ float: 'left', marginRight: '5px' }}
              />{' '}
              {/* Setup{' '} */}
              <FormattedMessage id="app.setup" defaultMessage="Setup" />
            </a>

            <ul>
              <li>
                <Link to="/setup/estate">Estate</Link>
              </li>
              <li>
                <Link to="/setup/fiscal-year">FiscalYear</Link>
              </li>
              <li>
                <Link to="/setup/inventory-setup">InventorySetup</Link>
              </li>
              <li>
                <Link to="/setup/store-master">StoreMaster</Link>
              </li>
            </ul>
          </li>

          <li>
            <a>
              <i
                className="fa fa-cog"
                style={{ float: 'left', marginRight: '5px' }}
              />
              {/* Utility */}
              <FormattedMessage id="app.utility" defaultMessage="Utility" />
            </a>

            <ul>
              <li>
                <Link to="/utility/manage-users">ManageUsers</Link>
              </li>
              <li>
                <Link to="/utility/manage-roles">ManageRoles</Link>
              </li>
              <li>
                <Link to="/utility/manage-permissions">ManagePermissions</Link>`
              </li>
            </ul>
          </li>
          <li style={{ float: 'right' }}>
            <a>
              <i
                className="fa fa-language"
                style={{ float: 'left', marginRight: '5px' }}
              />
              Language
            </a>

            <ul>
              <li>
                <a onClick={() => this.props.setLanguage('en')}>English</a>
              </li>
              <li>
                <a onClick={() => this.props.setLanguage('ne')}>Nepali</a>
              </li>
            </ul>
          </li>
          <li style={{ float: 'right' }}>
            <a>
              <i
                className="fa fa-keyboard"
                style={{ float: 'left', marginRight: '5px' }}
              />
              Keyboard
            </a>

            <ul>
              <li>
                <a onClick={() => this.props.setKeyboard('english')}>English</a>
              </li>
              <li>
                <a onClick={() => this.props.setKeyboard('romanized')}>
                  Romanized
                </a>
              </li>
              <li>
                <a onClick={() => this.props.setKeyboard('traditional')}>
                  Traditional
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: lang => setLanguage(lang, dispatch),
    setKeyboard: key => setKeyboard(key, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Menu);
