// let today = moment(new Date(), "").format("DD/MM/YYYY");
// console.log("Today...>>>", today)
// let date = '12-05-2000'
// let today = JSON.stringify(new Date(date).getDate() + "-" + (new Date(date).getMonth() + 1) + "-" + new Date(date).getFullYear()).format('DD-MM-YYYY');
// console.log("Today...>>>", today)


const moment = require('moment');

let date = '20-10-1995';
let day = date.split('-')
let d = day[0]
let m = day[1];
let y = day[2];
if (d <= 15) {
    console.log('less')
    let dt = 5;
    let dte = moment(new Date(y, m, dt)).format('DD-MM-YYYY');
    console.log("date:", dte);
}
if (d > 15) {
    console.log('high')
    let dt = 5;
    let dte = moment(new Date(y, m, dt)).add(1, 'M').format('DD-MM-YYYY');
    console.log("date:", dte);
}

// let d5 = moment(new Date(2011, 11, 22));
// console.log(d5);
