import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import DaskBoard from '../DaskBoard';
import theme from '../../commons/Theme';

function App() {
    return (
        <ThemeProvider theme={ theme }>
            <DaskBoard />
        </ThemeProvider>
    );
}

export default App;
