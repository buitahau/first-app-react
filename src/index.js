import React from 'react';
import {render} from 'react-dom';
import './index.css';
import './css/bootstrap.min.css';
import './css/bootstrap-grid.min.css';

import Clock from "./components/Clock.js";
import LoginButton from "./components/LoginButton.js";
import CurrencyConverter from "./components/currency_converter/CurrencyConverter.js";

class App extends React.Component {
    render() {
        return (
            <>
                <Clock />
                <LoginButton />
                <CurrencyConverter />
            </>
        );
    }
}

render(<App />, document.getElementById('root'));
