import React from "react";
import SelectorCurrency from "./SelectorCurrency.js"

class CurrencyConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {val : 0};
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }

    handleInputOnChange(event) {
        this.setState({val : event.target.value});
    }

    render() {
        const currentVal = this.state.val;
        return (
            <div className="currency_converter container">
                <fieldset>
                    <legend>Currency Converter</legend>
                    <div className="row">
                        <div className="left_panel col-sm-6">
                            <input type="text" onChange={this.handleInputOnChange} value={currentVal} />
                            <SelectorCurrency />
                        </div>
                        <div className="right_panel col-sm-6">
                            <input type="text" value={currentVal / 21000}/>
                            <SelectorCurrency />
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default CurrencyConverter;
