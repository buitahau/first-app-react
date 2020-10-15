import React from "react";

class GroupCurrency extends React.Component {

    constructor(props) {
        super(props);

        this.state = {currencyCode: "VND", val: 0};

        this.getListOptionCurrency = this.getListOptionCurrency.bind(this);
        this.handleInputOnChangeInternal = this.handleInputOnChangeInternal.bind(this);
        this.handleSelectOnChangeInternal = this.handleSelectOnChangeInternal.bind(this);
        this.passValueToParent = this.passValueToParent.bind(this);
    }

    handleSelectOnChangeInternal(e) {
        const selectVal = e.target.value;
        this.setState({currencyCode: selectVal});
        console.log(selectVal);

        let stateVal = this.state;
        stateVal.currencyCode = selectVal;

        this.passValueToParent(stateVal);
    }

    handleInputOnChangeInternal(e) {
        const inputVal = e.target.value;
        this.setState({val: inputVal});

        let stateVal = this.state;
        stateVal.val = inputVal;

        this.passValueToParent(stateVal);
    }

    passValueToParent(stateVal) {

        this.props.onChange(stateVal);
    }

    getListOptionCurrency() {
        const currencies = [
            {
                code: "VND",
                label: "VietNamDong"
            },
            {
                code: "USD",
                label: "Dola My"
            }
        ];
        return currencies.map(currency => {
            return <option key={currency.code} value={currency.code}>{currency.label}</option>
        });
    }

    render() {
        return (
            <div className="col-sm-6">
                <input type="text" onChange={this.handleInputOnChangeInternal} />
                <select className="selector_currency" onChange={this.handleSelectOnChangeInternal}>
                    {this.getListOptionCurrency()}
                </select>
            </div>
        );
    }
}

export default GroupCurrency;
