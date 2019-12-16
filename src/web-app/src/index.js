/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:19:06
 * @modify date 2019-08-18 08:19:06
 * @desc Create Redux Store,Initializing Saga Middleware, Wrap the App with Redux, React Router V4 & Baisc theme.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';
//import 'typeface-roboto';

import App from './App';
import './index.css';

//Store
import {store} from './redux';

//Application overall theme
import { theme } from './theme/theme';

//Wrap the app with Custom MUI theme and React Router V4.
const app = (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
);

//Embed the react app in the index.html by warpping with redux provider.
ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));