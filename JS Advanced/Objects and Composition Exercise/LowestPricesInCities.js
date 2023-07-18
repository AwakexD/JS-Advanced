function Solve(input) {
    const information = {};

    for (const line of input) {
        const tokens = line.split(' | ');
        const cityName = tokens[0];
        const productName = tokens[1];
        const price = Number(tokens[2]);

        if (information.hasOwnProperty(productName)) {
            if (price < information[productName].price) {
                information[productName] = {cityName, price}
            }
        } else {
            information[productName] = {cityName, price}
        }

    }
    for(let product in information) {
        console.log(`${product} -> ${information[product].price} (${information[product].cityName})`);
    }
}

Solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])