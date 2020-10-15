import React from "react";
import SelectorCurrency from "./SelectorCurrency.js";
import GroupCurrency from "./GroupCurrency.js";

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {val : 0};
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }

    handleInputOnChange(stateVal) {
        console.log(stateVal);
    }

    render() {
        const currentVal = this.state.val;
        return (
            <div className="currency_converter container">
                <fieldset>
                    <legend>Currency Converter</legend>
                    <div className="row">
                        <GroupCurrency onChange={this.handleInputOnChange}/>
                        <GroupCurrency onChange={this.handleInputOnChange}/>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default CurrencyConverter;
