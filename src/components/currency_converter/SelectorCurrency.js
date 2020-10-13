import React from "react";

class SelectorCurrency extends React.Component {

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
        return(
            <>
                <select className="selector_currency">
                    {this.getListOptionCurrency()}
                </select>
            </>
        );
    }
}

export default SelectorCurrency;
