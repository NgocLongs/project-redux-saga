import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUS } from './../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/tasks';
import * as modalActions from './../../actions/modal';
import PropTypes from 'prop-types';
import SearchBox from '../../components/SearchBox';

class DashBoard extends Component {

    state = {
        open : false
    }

    componentDidMount() {
        const { taskActionsCreator } = this.props;
        const { fetchListTasks } = taskActionsCreator;
        fetchListTasks();
    }

    renderDashBoard() {
        let xhtml = null;
        const { listTask } = this.props;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map((status, index) => {
                        const taskFiltered = listTask.filter(task => Number(task.status) === status.value);
                        return (
                            <TaskList key={index} tasks={taskFiltered} status={status} />
                        );
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open :false
        });
    }

    openForm = () => {
        const { modalActionCreator } = this.props;
        const { showModal, changeModalTitle, changeModalContent } = modalActionCreator;
        showModal();
        changeModalTitle('Thêm mới công việc');
        changeModalContent(<TaskForm />)
    }

    // renderForm() {
    //     let xhtml = null;
    //     const { open } = this.state;
    //     xhtml = (
    //         <TaskForm open={ open } onCloseForm={ this.handleClose } />
    //     );
    //     return xhtml;
    // }

    handleSearch = (event) => {
        const { value } = event.target;
        const { taskActionsCreator } = this.props;
        const { searchTask } = taskActionsCreator;
        searchTask(value);
    }

    renderSearchBox() {
        let result = null;
        result = (
            <SearchBox handleChange={this.handleSearch} />
        )
        return result;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.dashboard}>
                <Button variant='contained' color='primary' className={classes.button} onClick={ this.openForm }>
                    <AddIcon /> Thêm mới công việc
                </Button>

                {this.renderSearchBox()}

                {this.renderDashBoard()}

                {/* {this.renderForm()} */}

            </div>
        );
    }
}

DashBoard.propTypes = {
    classes : PropTypes.object,
    taskActionsCreator : PropTypes.shape({
        fetchListTasks : PropTypes.func,
        searchTask : PropTypes.func
    }),
    modalActionCreator : PropTypes.shape({
        showModal : PropTypes.func,
        hideModal : PropTypes.func,
        changeModalTitle : PropTypes.func,
        changeModalContent : PropTypes.func
    }),
    listTask : PropTypes.array,
}

const mapStateToProps = (state) => {
    return {
        listTask : state.tasks.listTask
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionCreator : bindActionCreators(modalActions, dispatch)
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DashBoard));