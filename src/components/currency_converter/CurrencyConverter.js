import React from "react";
import GroupCurrency from "./GroupCurrency.js";

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {val : 0, currencyCode: "VND"};
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }

    handleInputOnChange(stateUpdated) {
        this.setState({val: stateUpdated.val});
        this.setState({currencyCode: stateUpdated.currencyCode});
    }

    render() {
        const currentState = this.state;
        return (
            <div className="currency_converter container">
                <fieldset>
                    <legend>Currency Converter</legend>
                    <div className="row">
                        <GroupCurrency onChange={this.handleInputOnChange} initValue={currentState} type="source" />
                        <GroupCurrency onChange={this.handleInputOnChange} initValue={currentState} type="exchange" />
                        <GroupCurrency onChange={this.handleInputOnChange} initValue={currentState} type="exchange" />
                        <GroupCurrency onChange={this.handleInputOnChange} initValue={currentState} type="source" />
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default CurrencyConverter;
