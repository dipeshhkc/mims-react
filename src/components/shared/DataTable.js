import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import excel from '../../assets/icon/excel.png';
import print from '../../assets/icon/print.png';
import Excel from './Excel';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from './dialog';
import ReactToPrint from 'react-to-print';

class DataTable extends Component {
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            // backgroundColor: '#E0E9F6'
          }
        }
      }
    });

  render() {
    const beforePrint = () => {
      let ml = prompt('Margin Left in mm');
      let mt = prompt('Margin Top in mm');
      var style = document.createElement('style');
      document.head.appendChild(style);
      style.innerHTML = `@page {margin: ${mt}mm 0mm 0mm ${ml}mm`;
      document.getElementsByClassName('print')[0].click();
    };

    const options = {
      filterType: 'textField',
      customToolbar: function() {
        return (
          <div style={{ display: 'inline-block' }}>
            <Tooltip title="Download Excel">
              <IconButton>
                {' '}
                <img
                  style={{
                    cursor: 'pointer',
                    height: '20px',
                    width: '20px'
                  }}
                  src={excel}
                  alt="excel"
                  onClick={() => {
                    document.getElementsByClassName('excel')[0].click();
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Print">
              <IconButton>
                {' '}
                <img
                  style={{
                    cursor: 'pointer',
                    height: '20px',
                    width: '20px'
                  }}
                  src={print}
                  alt="print"
                  onClick={() => {
                    // document.getElementsByClassName('print')[0].click();
                    beforePrint();
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
        );
      },

      textLabels: {
        body: {
          noMatch: <CircularProgress />,
          // noMatch: 'Sory, no matching records found',
          toolTip: 'Sort'
        }
      },
      page: 0,
      elevation: 10,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 15],
      print: false,
      // caseSensitive: true,
      responsive: 'scroll',
      // serverSide: true,
      onTableChange: (action, tableState) => {
        console.log(action);
        console.log(tableState);
        // this.xhrRequest('my.api.com/tableData', result => {
        //   this.setState({ data: result });
        // });
      }
    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <Dialog />
        <br />
        <ReactToPrint
          trigger={() => {
            return (
              <a style={{ display: 'none' }} className="print" href="#">
                Print this out!
              </a>
            );
          }}
          content={() => {
            let classkoname = document.querySelector(
              '[class^="MUIDataTable-responsiveScroll"]'
            ).className;
            return document.getElementsByClassName(classkoname)[0];
          }}
        />
        <Excel data={this.props.data} columns={this.props.columns} />
        <MUIDataTable
          title={
            <h2 style={{ color: '#3093C2', textTransform: 'capitalize' }}>
              {this.props.match.path.split('/')[2].replace(/-/g, ' ')}
            </h2>
          }
          data={this.props.data}
          columns={this.props.columns}
          options={options}
        />{' '}
      </MuiThemeProvider>
    );
  }
}

export default withRouter(DataTable);
