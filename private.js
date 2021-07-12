'use strict';

class A {
    #name = 'Boris';
    familyName = 'Lll'

    showName() {
        return this.#name;
    }

    #showFamilyPassportPrivate() {
        return '123123123';
    }

    showPassport(){
        return this.#showFamilyPassportPrivate();
    }
}

const instance = new A();

console.log(instance['#name']);
// console.log(instance.#name);
console.log(instance['familyName']);
console.log(instance.familyName);

console.log(instance.showName());


console.log(instance.showPassport());
// console.log(instance.#showFamilyPassportPrivate());
