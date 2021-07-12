'use strict';

// process.report.writeReport();
// process.report.getReport();

process.on('uncaughtException', (err) => {
    // console.log(process.report.getReport())

    process.exit(1);
});

throw new Error('AAAAAAAAAAAA...' );

// node --report-uncaught-exception --report-on-signal --report-on-fatalerror index.js