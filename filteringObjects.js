var homes = [
    {
        "home_id": "1",
        "price": "925",
        "sqft": "1100",
        "num_of_beds": "2",
        "num_of_baths": "2.0",
    },
    {
        "home_id": "2",
        "price": "1425",
        "sqft": "1900",
        "num_of_beds": "4",
        "num_of_baths": "2.5",
    },
]

var result = homes.find(homes => { return homes.home_id === "1" })
console.log(result)