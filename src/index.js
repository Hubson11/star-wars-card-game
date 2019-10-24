import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './createStore';

import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
    palette: {
        color: {
            white: '#FFFFFF',
            black: '#000000',
            silver:  '#e0e0e0',
            green: '#64dd17',
            gray: '#9e9e9e',
            darkGray: '#616161',
            lightGray: '#eeeeee',
            lightblue: '#448aff',
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
