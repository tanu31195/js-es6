let address = {
    street: 'aa',
    city: 'bb',
    zipCode: 123
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

//Factory function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}

let address1 = createAddress('aaa', 'bbb', 2323);
console.log(address1);

//Constructor function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address2 = new Address('xx', 'yyy', 321);
let address3 = new Address('xx', 'yy', 321);
let address4 = address3;
console.log(address2);

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipcode === address2.zipcode;
}

console.log('Equal: ' + areEqual(address2, address3));

function areSame(address1, address2) {
    return address1 === address2;
}

console.log('Same: ' + areSame(address4, address3));
