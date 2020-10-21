import React from "react";

class GroupCurrency extends React.Component {

    static _currencies = [
        {
            code: "VND",
            label: "VietNamDong",
            ratio: 1
        },
        {
            code: "USD",
            label: "Dola My",
            ratio: 21000
        }
    ];

    static SOURCE = "source";
    static EXCHANGE = "exchange";

    constructor(props) {
        super(props);

        this.state = GroupCurrency.initStateFromProps(props);

        this.getListOptionCurrency = this.getListOptionCurrency.bind(this);
        this.handleInputOnChangeInternal = this.handleInputOnChangeInternal.bind(this);
        this.handleSelectOnChangeInternal = this.handleSelectOnChangeInternal.bind(this);
        this.passValueToParent = this.passValueToParent.bind(this);
    }

    handleSelectOnChangeInternal(e) {
        const selectVal = e.target.value;
        this.setState({currencyCode: selectVal});

        if (this.state.type == GroupCurrency.SOURCE) {
            let stateVal = this.state;
            stateVal.currencyCode = selectVal;

            this.passValueToParent(stateVal);
        }
    }

    handleInputOnChangeInternal(e) {
        const inputVal = e.target.value;
        this.setState({val: inputVal});

        if (this.state.type == GroupCurrency.SOURCE) {
            let stateVal = this.state;
            stateVal.val = inputVal;

            this.passValueToParent(stateVal);
        }
    }

    passValueToParent(stateUpdated) {
        this.props.onChange(stateUpdated);
    }

    getListOptionCurrency() {
        return GroupCurrency._currencies.map(currency => {
            return <option key={currency.code}
                           value={currency.code}>{currency.label}</option>
        });
    }

    static exchangeMoney(currentCode, initializeCode, initializeMoney) {
        const currentRatio = GroupCurrency.getRatioFromCode(currentCode);
        const initializeRatio = GroupCurrency.getRatioFromCode(initializeCode);

        return (initializeMoney / currentRatio) * initializeRatio;
    }

    static getDerivedStateFromProps(props, currentState) {

        return {
            val: GroupCurrency.exchangeMoney(currentState.currencyCode,
                props.initValue.currencyCode, props.initValue.val)
        };
    }

    static getRatioFromCode(code) {
        return GroupCurrency._currencies.filter(
            currency => currency.code == code)
            [0].ratio;
    }

    static initStateFromProps(props) {
        let state = {
            currencyCode: "VND", val: 0
        };

        let type = GroupCurrency.SOURCE;
        if(props.type != GroupCurrency.SOURCE) {
            type = GroupCurrency.EXCHANGE;
        }
        state.type = type;

        return state;
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <fieldset>
                        <legend>{this.state.type}</legend>
                        <div className="col-sm-6">
                            <input type="text"
                                   onChange={this.handleInputOnChangeInternal}
                                   value={this.state.val}/>
                        </div>
                        <div className="col-sm-6">
                            <select className="selector_currency"
                                    onChange={this.handleSelectOnChangeInternal}>
                                {this.getListOptionCurrency()}
                            </select>
                        </div>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default GroupCurrency;
