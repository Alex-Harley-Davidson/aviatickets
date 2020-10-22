class CurrencyUI {
    constructor() {
        this.currency = document.getElementById("currency");
        this.dictionary = {
            USD : "$",
            EUR : "€",
        };
    }

    get currencyValue() {
        return this.currency.value;
    }

    getCurrencySymbol() {
        console.log(this);
        return this.dictionary[this.currencyValue];
    }
}

let currencyUI = new CurrencyUI();

export default currencyUI;