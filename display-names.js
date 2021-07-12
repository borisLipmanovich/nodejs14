// Intl.DisplayNames && Intl.DateTimeFormat
'use strict';

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
console.log(regionNames.of('US'));


const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
console.log(new Intl.DateTimeFormat('en', { dateStyle: 'full', timeStyle: 'long' }).format(date));

// zh
// he-IL