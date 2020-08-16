import React, { Component } from 'react';
import { Button, withStyles, Grid, Box } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';
import { reduxForm, Field } from 'redux-form';
import renderTextField from './../../components/FormHelper/TextField/index';
import validate from './validate';

class TaskForm extends Component {

    handleSubmitForm = (data) => {
        console.log(data);
    }

    required = (value) => {
        let error = 'Vui lòng nhập tiêu đề';
        if(value !== null && typeof value !== 'undefined' && value.trim() !== '') {
            error = null;
        }
        return error;
    }

    minLength5 = (value) => {
        let error = null;
        if (value.length < 5) {
            error = 'Phải nhập ít nhất 5 kí tự';
        }
        return error;
    }

    render() {
        var { classes, modalActionCreators, handleSubmit, submitting, invalid } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id='title'
                            className={classes.textField}
                            name='title' 
                            component={renderTextField} 
                            label="Title"
                            type='text'
                            // validate={[this.required, this.minLength5]}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id='description'
                            multiline
                            rowsMax="4"
                            className={classes.textField}
                            name='description' 
                            component={renderTextField} 
                            label="Description"
                            type='text'
                            // margin="normal"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={1}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                type='submit'
                                disabled={invalid || submitting}
                            >
                                Lưu Lại
                            </Button>
                            <Box mr={3}>
                                <Button 
                                    variant="contained" 
                                    onClick={hideModal}
                                >
                                    Hủy bỏ
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators : PropTypes.shape({
        hideModal : PropTypes.func,
    }),
    handleSubmit : PropTypes.func,
    invalid : PropTypes.bool,
    submitting : PropTypes.bool,
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        modalActionCreators : bindActionCreators(modalActions, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
    form : FORM_NAME,
    validate : validate
})

export default compose(
    withStyles(styles),
    withReduxForm,
    withConnect
)(TaskForm);