#include <stdio.h>

int main(int argc, char **argv)
{
    printf("This code is loaded from C++!");
}

//# wasicc hello.c -o hello

//# wasmtime run hello.wasm 
