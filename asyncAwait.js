async function add() {
    let result = await sub();
    console.log("result value", result);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2 + 3);
        }, 2000);
    });
}
function sub() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(6 - 2);
        }, 2000);
    });
}
async function result() {
    let value = await add();
    console.log("Value after wait", value);
}

result();
