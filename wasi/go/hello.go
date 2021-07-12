package main

import (
    "fmt"
)

func main() {
    fmt.Println("This code is loaded from GO!")
}

// GOOS=js GOARCH=wasm go build -o hello.wasm
