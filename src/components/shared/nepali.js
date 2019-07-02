import React, { Component } from 'react';
import './nepali-mapping';
import TextField from '@material-ui/core/TextField';

class nepali extends Component {
  state = {
    value: ''
  };

  calculate(e) {
    let value = '';
    console.log(e.target);
    if (this.state.value !== e.target.value) {
      for (let c of e.target.value) {
        console.log(c.charCodeAt(0));
        let conv_char = window[this.props.funcname](c.charCodeAt(0));
        value += conv_char || c;
      }
      this.setState({ value });
      this.props.valueChange && this.props.valueChange(e, value);
    }
  }

  render() {
    return (
      <TextField
        id="outlined-name"
        // style={{ fontFamily: 'Unicode' }}
        label={this.props.funcname}
        value={this.state.value}
        onChange={this.calculate.bind(this)}
        margin="normal"
        variant="outlined"
      />
    );
  }
}

export default nepali;
