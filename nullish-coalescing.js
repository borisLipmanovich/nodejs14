// Nullish Coalescing for JavaScript
'use strict';

const response = {
    settings: {
        nullValue: null,
        height: 400,
        animationDuration: 0,
        headerText: '',
        showSplashScreen: false
    }
};

const undefinedValue = response.settings.undefinedValue || 'some other default'; // result: 'some other default'
const nullValue = response.settings.nullValue || 'some other default'; // result: 'some other default'
const headerText = response.settings.headerText || 'Hello, world!'; // Potentially unintended. '' is falsy, result: 'Hello, world!'
const animationDuration = response.settings.animationDuration || 300; // Potentially unintended. 0 is falsy, result: 300
const showSplashScreen = response.settings.showSplashScreen || true; // Potentially unintended. false is falsy, result: true

console.log(undefinedValue);
console.log(nullValue);
console.log(headerText);
console.log(animationDuration);
console.log(showSplashScreen);

// const undefinedValue = response.settings.undefinedValue ?? 'some other default'; // result: 'some other default'
// const nullValue = response.settings.nullValue ?? 'some other default'; // result: 'some other default'
// const headerText = response.settings.headerText ?? 'Hello, world!'; // result: ''
// const animationDuration = response.settings.animationDuration ?? 300; // result: 0
// const showSplashScreen = response.settings.showSplashScreen ?? true; // result: false

// console.log(undefinedValue);
// console.log(nullValue);
// console.log(headerText);
// console.log(animationDuration);
// console.log(showSplashScreen);