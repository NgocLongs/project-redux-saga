import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class TaskForm extends Component {
    render() {
        var { open, onCloseForm } = this.props;
        return (
            <Dialog
                open={open}
                onClose={onCloseForm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Thêm mới công việc</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="standard-basic" label="Standard" />
                        <TextField
                            id="standard-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseForm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onCloseForm} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);