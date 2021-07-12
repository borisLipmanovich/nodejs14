extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// https://dev.to/jor/rust-wasm-browser-nodejs-2bo6

// cargo build --target wasm32-unknown-unknown --release
// wasm-bindgen target/wasm32-unknown-unknown/release/deps/libexample.wasm --nodejs  --out-dir ./example