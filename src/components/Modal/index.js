import React, { Component } from 'react';
import { withStyles, Modal } from '@material-ui/core';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';

class Modals extends Component {
    render() {
        const { open, classes, component, title, modalActionCreators } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span classes={classes.title}>
                            { title }
                        </span>
                        <CloseIcon className={classes.closeIcon} onClick={hideModal} />
                    </div>
                    <div className={classes.content}>
                        { component }
                    </div>
                </div>
            </Modal>   
        );
    }
}

Modals.propTypes = {
    classes : PropTypes.object,
    open : PropTypes.bool,
    title : PropTypes.string,
    component : PropTypes.object,
    modalActionCreators : PropTypes.shape({
        hideModal : PropTypes.func,
    })
}

const mapStateToProps = (state) => {
    return {
        open : state.modal.showModal,
        component : state.modal.component,
        title : state.modal.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalActionCreators : bindActionCreators(modalActions, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect
)(Modals);