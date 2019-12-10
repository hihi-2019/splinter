const {generateDebtMessages, removeZeroBalances, sortBalances} = require('../client/utils/settleDebts')

let debtsWithZero = [
    { name: 'alpha', balance: 200 },
    { name: 'bravo', balance: 300 },
    { name: 'charlie', balance: -50 },
    { name: 'delta', balance: -411 },
    { name: 'echo', balance: -39 },
    { name: 'foxtrot', balance: 0}
]

let debtsUnsorted = [
    { name: 'charlie', balance: -50 },
    { name: 'alpha', balance: 200 },
    { name: 'echo', balance: -39 },
    { name: 'bravo', balance: 300 },
    { name: 'delta', balance: -411 },
]

let debts = [
    { name: 'alpha', balance: 200 },
    { name: 'bravo', balance: 300 },
    { name: 'charlie', balance: -50 },
    { name: 'delta', balance: -411 },
    { name: 'echo', balance: -39 },
]

let sortedDebts =  [
    { name: 'bravo', balance: 300 },
    { name: 'alpha', balance: 200 },
    { name: 'echo', balance: -39 },
    { name: 'charlie', balance: -50 },
    { name: 'delta', balance: -411 }
]

let messyDebt = [
    {name: 'Alpha', balance: 1033.56},
    {name: 'Beta', balance: -516.44},
    {name: 'Charlie', balance: 33.56},
    {name: 'Delta',	balance: 217.56},
    {name: 'Echo', balance: -1.44},
    {name: 'Foxtrot', balance: -236.44},
    {name: 'Golf', balance:402.56},
    {name: 'Hotel', balance:-416.44},
    {name: 'India', balance:-516.44}
]



// console.log(generateDebtMessages(messyDebt))








// console.log('this is the sorted array',sortBalances(debts))
// console.log('this is the sorted array with zeros removed', removeZeroBalances(debts))
/////////////////////////////////////
// test suite
test('test some basic js', function () {
    expect(2 + 2 === 4).toBeTruthy()
})

test('given an array with an object where balance = 0, function returns an array with no zero balances', function () {
    let expected = [{ name: 'alpha', balance: 200 },
                    { name: 'bravo', balance: 300 },
                    { name: 'charlie', balance: -50 },
                    { name: 'delta', balance: -411 },
                    { name: 'echo', balance: -39 }]

    let actual = removeZeroBalances(debtsWithZero)
    expect (actual).toEqual(expected)
})

test('given an array without an object where balance = 0 function returns the same array', function () {
    let expected = [{ name: 'alpha', balance: 200 },
                    { name: 'bravo', balance: 300 },
                    { name: 'charlie', balance: -50 },
                    { name: 'delta', balance: -411 },
                    { name: 'echo', balance: -39 }]

    let actual = removeZeroBalances(debts)
    expect (actual).toEqual(expected)
})

test ('given an unsorted array of objects, return a sorted array, sorted in ascending order by balance', function () {
    let expected = [{ name: 'bravo', balance: 300 },
                    { name: 'alpha', balance: 200 },
                    { name: 'echo', balance: -39 },
                    { name: 'charlie', balance: -50 },
                    { name: 'delta', balance: -411 },]

    let actual = sortBalances(debtsUnsorted)

    expect (actual).toEqual(expected)
})


test('given a messy array of balance objects, return an array of transactions which settle debt', function () {
    let expected = [ 'India should pay $516.44 to Alpha.',
    'Beta should pay $516.44 to Alpha.',
    'Hotel should pay $402.56 to Golf.',
    'Foxtrot should pay $217.56 to Delta.',
    'Foxtrot should pay $18.88 to Charlie.',
    'Hotel should pay $13.88 to Charlie.',
    'Echo should pay $0.80 to Charlie.',
    'Echo should pay $0.64 to Alpha.' ]

    let actual = generateDebtMessages(messyDebt)

    expect(actual).toEqual(expected)
})

