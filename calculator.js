function calculate() {
    try {
        principal = parseFloat(document.getElementById("principal").value);
        yearlyInterest = parseFloat(document.getElementById("yearlyInterest").value);
        term = parseInt(document.getElementById("term").value);

        console.log(principal, yearlyInterest, term)

        if (isNaN(principal) || isNaN(yearlyInterest) || isNaN(term)) {
            alert("Inputs must be numerical.")
            return;
        }

        if (principal < 0 || yearlyInterest < 0 || term < 0) {
            alert("Inputs cannot be negative values.")
            return;
        }

        if (principal > 10000000) {
            alert("Principal amount is too large.")
            return;
        }

        if (term > 600) {
            alert("Loan term is too large.")
            return;
        }

        monthlyInterest = yearlyInterest / 12;
        var monthlyPay;
        if (monthlyInterest == 0.0) {
            monthlyPay = principal / term;
        }
        else {
            monthlyPay = principal * monthlyInterest / (1 - (1 / (1 + monthlyInterest) ** term));
        }

        if (isNaN(monthlyPay)) {
            alert("Combination of Principal amount and/or Monthly interest is too large.");
            return;
        }
        paySum = monthlyPay * term;
        totalInterest = paySum - principal;

        
        document.getElementById("monthlyPay").innerText = "Monthly payments: $" + monthlyPay.toFixed(2);
        document.getElementById("paySum").innerText = "Sum of all payments: $" + paySum.toFixed(2);
        document.getElementById("totalInterest").innerText = "Total interest paid: $" + totalInterest.toFixed(2);
    }

    catch (e) {
        console.log(e);
    }
}

function clearResult() {
    document.getElementById("monthlyPay").innerText = "";
    document.getElementById("paySum").innerText = "";
    document.getElementById("totalInterest").innerText = "";
}
