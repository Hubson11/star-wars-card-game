import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './createStore';

import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
    palette: {
        primary: {
            white: '#FFFFFF',
            main: '#cfd8dc',
            green: '#64dd17',
            red: '#d50000',
            gray: '#eceff1',
            darkGray: '#b0bec5',
        },
    },
})

theme = responsiveFontSizes(theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
