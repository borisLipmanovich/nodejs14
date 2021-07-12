'use strict';

const express = require("express");

const { AsyncLocalStorage } = require("async_hooks");
const { v4: uuid } = require("uuid");

const context = new AsyncLocalStorage();

function printStore(msg) {
    const store = context.getStore();
    const id = store.get("id");
    const originalUrl = store.get("originalUrl");

    console.log(`${id}, ${originalUrl}`, msg);
}

express()
    .use((req, res, next) => {
        const store = new Map();
        context.run(store, () => {
            store.set("id", uuid());
            store.set("originalUrl", req.originalUrl);

            printStore("first middleware");
            next();
        });
    })
    .use('/test', (req, res) => {
        printStore("second middleware");
        res.end();
    })
    .listen(8080);

//https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage
//https://nodejs.org/api/async_context.html#async_context_class_asynclocalstorage
//https://github.com/nodejs/node/issues/34493
//https://dzone.com/articles/beware-the-performance-cost-of-async-hooks-node-8

//https://nodejs.org/dist/latest-v14.x/docs/api/async_hooks.html#async_hooks_class_asynclocalstorage