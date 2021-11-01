let accountBalanceHistory;
//[
//     {
//         monthNumber: 0, // current month
//         account: {
//             balance: { amount: 0 },
//         },
//     },
//     {
//         monthNumber: 1, // last month
//         account: {
//             balance: { amount: 100 },
//         },
//     },
//     {
//         monthNumber: 2, // two months ago
//         account: {
//             balance: { amount: 200 },
//         },
//     }
// ]


const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/

    // result to store difference between the values to check type
    if (!accountBalanceHistory || accountBalanceHistory.length === 0) {
        return null;
    }

    let resultSet = new Set();
    // sort the input acording to the month number
    accountBalanceHistory.sort((a, b) => {
        return b.monthNumber - a.monthNumber;
    })

    // to store differnce of amounts
    let amountArray = [];
    accountBalanceHistory.forEach(element => {
        amountArray.push(element.account.balance.amount);
    });

    for (let i = 0; i < amountArray.length - 1; i++) {
        let diff = amountArray[i] - amountArray[i + 1];
        resultSet.add(diff);
    }
    // if size of the set is 1 means constant difference between the amounts
    let result = resultSet.size;

    return result === 1 ? "B" : "A";
};

//console.log(accountTypeChecker(accountBalanceHistory));

module.exports = accountTypeChecker;