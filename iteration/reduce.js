const myNums = [1,2,3];

const total = myNums.reduce(function (sum , currval) {
    console.log(`sum ${sum} and currval: ${currval}`);
    return sum + currval;
}, 0)

console.log(total);

const shopping_cart = [
    {
        itemName: "data-science",
        price: 13231,
    },
    {
        itemName: "python basic",
        price: 1214,

    },
]

const priceTopay = shopping_cart.reduce((sum,item) => sum + item.price, 0)


console.log(priceTopay);
