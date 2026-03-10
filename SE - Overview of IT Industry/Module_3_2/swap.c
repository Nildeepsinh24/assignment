#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;

    printf("Before swap: a = %d, b = %d\n", a, b);

    // Swap without third variable
    a = a + b;
    b = a - b;
    a = a - b;

    printf("After swap: a = %d, b = %d\n", a, b);

    return 0;
}
