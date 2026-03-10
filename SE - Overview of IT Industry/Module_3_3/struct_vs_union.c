#include <stdio.h>

struct MyStruct {
    int integerPart;
    float floatPart;
};

union MyUnion {
    int integerPart;
    float floatPart;
};

int main() {
    struct MyStruct s;
    union MyUnion u;

    printf("--- Difference Between Structure and Union ---\n\n");
    
    // Size Difference
    printf("1. Memory Allocation:\n");
    printf("Size of Structure (MyStruct): %lu bytes\n", sizeof(s));
    printf("Size of Union (MyUnion): %lu bytes\n", sizeof(u));
    printf("(Union allocates memory equal to its largest member, whereas Structure allocates memory for all members combined.)\n\n");

    // Value Assignment behavior
    printf("2. Member Access:\n");
    s.integerPart = 10;
    s.floatPart = 20.5;
    printf("Structure - Integer: %d, Float: %.2f\n", s.integerPart, s.floatPart);

    u.integerPart = 10;
    u.floatPart = 20.5; // Overwrites integerPart memory block
    printf("Union - Integer (corrupted): %d, Float (preserved): %.2f\n", u.integerPart, u.floatPart);
    printf("(Union members share the same memory location. Changing one member alters the others.)\n");

    return 0;
}
