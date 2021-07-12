// Optional Chaining for JavaScript
'use strict';

class A {
    show() {
        return 'my name';
    }
}

const human = { address: { zipcode: 8736458 } };
if (human && human.address && human.address.zipcode) {
    // do something
}

// console.log(human?.address?.zipcode);

const instance = new A();
console.log(instance.showLastname?.());
