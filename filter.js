var requests = [{
    App: 'Adobe',
    Count: 10
}, {
    App: 'Apple',
    Count: 12
}, {
    App: 'Amazon',
    Count: 5
}, {
    App: 'Microsoft',
    Count: 2
}];
let resil = requests.find(function (item) {
    return item.App == "Apple"
});
console.log("....", resil.Count);
