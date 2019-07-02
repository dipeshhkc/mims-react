import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';

class dialog extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          //   scroll="paper"
          onClick={this.handleClickOpen}
        >
          Add New
        </Button>
        <Dialog
          style={{ pointerEvents: 'none' }}
          open={this.state.open}
          maxWidth="xl"
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Opening Stock</DialogTitle>
          <DialogContent style={{ pointerEvents: 'auto' }}>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
            <Select

            //   options={options}
            />
            <Select

            //   options={options}
            />
            <Select

            //   options={options}
            />
          </DialogContent>
          <DialogActions style={{ pointerEvents: 'auto' }}>
            <Button color="primary">Save</Button>
            <Button onClick={this.handleClose} color="primary">
              Save & Close
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default dialog;
