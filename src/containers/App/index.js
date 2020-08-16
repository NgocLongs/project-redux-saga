import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import DashBoard from '../DashBoard';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from './../../components/Modal';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={ theme }>
                <ToastContainer />
                <GlobalLoading />
                <Modal />
                <DashBoard />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
