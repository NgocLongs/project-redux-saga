import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

class SearchBox extends Component {
    render() {
        var { classes, handleChange } = this.props;
        return (
            <TextField 
                autoComplete="off"
                className={classes.searchBox} 
                label="Search" 
                onChange={handleChange}
            />
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox);