function createCurrencyConverter(rate) {
    function toLocalCurrency() {
        var amount = parseFloat(prompt("Введіть суму в USD:"));
        if (isNaN(amount)) {
            return "Некоректна сума.";
        }
        return "€" + (amount * rate).toFixed(2);
    }
    function toForeignCurrency() {
        var amount = parseFloat(prompt("Введіть суму в EUR:"));
        if (isNaN(amount)) {
            return "Некоректна сума.";
        }
        return "$" + (amount / rate).toFixed(2);
    }
    return {
        toLocalCurrency: toLocalCurrency,
        toForeignCurrency: toForeignCurrency
    };
}
var converter = createCurrencyConverter(0.92);
console.log(converter.toLocalCurrency()); 
console.log(converter.toForeignCurrency());