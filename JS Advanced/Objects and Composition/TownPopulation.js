function Solve(inputArr) {
    let registry = {}

    inputArr.forEach(element => {
        let [townName, townPopulation] = element.split(' <-> ')
        townPopulation = Number(townPopulation)

        if (registry.hasOwnProperty(townName)) {
            registry[townName] += townPopulation;
        } else {
            registry[townName] = townPopulation;
        };
    });

    for (const key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}

Solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

Solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);