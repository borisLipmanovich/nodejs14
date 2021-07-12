let imports = {};
let wasm;

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
module.exports.add = function(a, b) {
    var ret = wasm.add(a, b);
    return ret;
};

const path = require('path').join(__dirname, 'libexample_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

