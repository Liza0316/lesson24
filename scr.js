function createInvestmentAccount(initialAmount, annualInterestRate) {
    let balance = initialAmount;
    let totalProfit = 0;
    return {
        deposit: function(amount) {
            balance += amount;
            console.log("До вашого рахунку було додано" + amount + " грн.");
        },
        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
                console.log("З вашого рахунку було знято " + amount + " грн.");
            } else {
                console.log("Недостатньо коштів на рахунку.");
            }
        },
        calculateProfit: function(years) {
            const interestRate = annualInterestRate / 100;
            const profit = balance * Math.pow(1 + interestRate, years) - balance;
            totalProfit += profit;
            return profit;
        },
        getAccountInfo: function() {
            return "Поточний баланс: " + balance.toFixed(2) + " грн.\n" +
            "Загальний прибуток: " + totalProfit.toFixed(2) + " грн.\n" +
            "Річна процентна ставка: " + annualInterestRate + "%";
        }
    };
}
// результат 
const initialAmount = prompt("Введіть початкову суму для вашого рахунку:");
const annualInterestRate = prompt("Введіть річну процентну ставку для вашого рахунку (%):");
const years = prompt("На скільки років плануєте зберігати гроші на рахунку:");
const myAccount = createInvestmentAccount(parseFloat(initialAmount), parseFloat(annualInterestRate));
const depositAmount = prompt("Введіть суму, яку бажаєте внести на рахунок:");
myAccount.deposit(parseFloat(depositAmount));
console.log("Розрахунок прибутку за" + years + "років:"+ myAccount.calculateProfit(parseInt(years)).toFixed(2) + "грн.");
console.log(myAccount.getAccountInfo());