'use strict';

const fs = require("fs");
const { WASI } = require("wasi");

require("./go/wasm_exec");

async function runCPP() {
    const wasi = new WASI({ args: process.argv });
    const importObject = { wasi_unstable: wasi.wasiImport };

    try {
        const wasm = await WebAssembly.compile(fs.readFileSync("./cpp/hello.wasm"));
        const instance = await WebAssembly.instantiate(wasm, importObject);

        wasi.start(instance);
    } catch (err) {
        console.log(err);
    }
}

/**
 * https://www.sitepen.com/blog/compiling-go-to-webassembly
 * https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js
 * https://github.com/nodejs/help/issues/2752
 */
async function runGo() {
    try {
        const go = new Go();
        const wasm = await WebAssembly.compile(fs.readFileSync("./go/hello.wasm"));
        const instance = await WebAssembly.instantiate(wasm, go.importObject);

        await go.run(instance);
    } catch (err) {
        console.log(err);
    }
}

async function runRust() {
    try {
        const instance = require('./rust/libexample/example/libexample');
        console.log(instance.add(2, 2));
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    await runCPP();
    console.log("\n");
    await runGo();
    console.log("\n");
    await runRust();
})();

// $ node --version
// v14.17.1

// $ node --experimental-wasi-unstable-preview1 --experimental-wasm-bigint index.js

// https://blog.ttulka.com/learning-webassembly-7-introducing-wasi