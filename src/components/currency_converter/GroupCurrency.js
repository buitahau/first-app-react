import React from "react";

class GroupCurrency extends React.Component {

    constructor(props) {
        super(props);
        this.getListOptionCurrency = this.getListOptionCurrency.bind(this);
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
                <input type="text" onChange={this.handleInputOnChange} />
                <select className="selector_currency">
                    {this.getListOptionCurrency()}
                </select>
            </div>
        );
    }
}

export default GroupCurrency;
