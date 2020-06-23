function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log('age: ' + getAge("2018/08/25"));

// let age = moment().diff(moment("18-03-1992", "DD-MM-YYYY"), 'years');
// console.log("Age..>", age);
