import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUS } from './../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from './../../components/TaskForm/index';

const listTask = [
    {
        id: 0,
        title: 'Read Book',
        description: 'Read material-UI book',
        status: 0
    },
    {
        id: 1,
        title: 'Play Soccer',
        description: 'With my friend',
        status: 2
    },
    {
        id: 2,
        title: 'Go to swimming',
        description: 'Swimming at the lake',
        status: 1
    }
]

class DaskBoard extends Component {

    state = {
        open : false
    }

    renderDaskBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList key={index} tasks={taskFiltered} status={status} />
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open :false
        })
    }

    openForm = () => {
        this.setState({
            open : true
        })
    }

    renderForm() {
        let xhtml = null;
        const { open } = this.state;
        xhtml = (
            <TaskForm open={ open } onCloseForm={ this.handleClose } />
        )
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.daskboard}>
                <Button variant='contained' color='primary' className={classes.button} onClick={ this.openForm }>
                    <AddIcon /> Thêm mới công việc
                </Button>

                {this.renderDaskBoard()}

                {this.renderForm()}

            </div>
        );
    }
}

export default withStyles(styles)(DaskBoard);