import React, { Component } from 'react';
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Excel extends Component {
  render() {
    const DataSet = [
      {
        columns: this.props.columns,
        data: this.props.data
      }
    ];

    return (
      <ExcelFile
        element={
          <button style={{ display: 'none' }} className="excel">
            {' '}
          </button>
        }
      >
        <ExcelSheet dataSet={DataSet} name="Organization" />
      </ExcelFile>
    );
  }
}

export default Excel;
