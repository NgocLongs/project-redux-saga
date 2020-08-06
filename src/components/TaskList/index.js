import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        var { classes, tasks, status } = this.props;
        return (
            <Grid item md={4} xs={12}>
                <Box mt={5} mb={2}>
                    <div className={classes.status}>
                        {status.label}
                    </div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskItem key={index} task={ task } status={ status } />
                            )
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);