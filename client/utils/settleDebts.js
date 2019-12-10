
function generateDebtMessages(debtArray, messageArray) {
    if (messageArray == undefined) {
        messageArray = []
    }
    while (debtArray.length > 1) {
        debtArray = sortBalances(debtArray)
        let first = debtArray[0]
        let last = debtArray[debtArray.length-1]
        
        if (Math.abs(first.balance) > Math.abs(last.balance)) {
            // if the first person is owed more from the group then the last person owes, the last person gives them everything and get removed from the balancesheet
            if (last.balance != 0) {
            messageArray.push(last.name + ' should pay $' + Math.abs(last.balance)  + ' to ' + first.name + '.')
            first.balance -= Math.abs(last.balance)
            first.balance = first.balance.toFixed(2)
            last.balance = 0}

        } else {
            
            if (last.balance != 0) {
            messageArray.push(last.name + ' should pay $' + first.balance + ' to ' + first.name + '.')
            last.balance += Math.abs(first.balance)
            last.balance = last.balance.toFixed(2) 
            first.balance = 0}
        }

        debtArray = removeZeroBalances(debtArray)
        generateDebtMessages(debtArray, messageArray)

    }
    console.log(messageArray)
    return messageArray
}

function sortBalances (array) {
    return array.sort((a, b) => {
        return b.balance - a.balance
    })
}

function removeZeroBalances (array) {
    return array.filter((balance) => (balance.balance != 0))
}

module.exports = {
    sortBalances,
    removeZeroBalances,
    generateDebtMessages
}

