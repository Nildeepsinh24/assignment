#include <stdio.h>

int main() {
    int num, maxDigit = 0, remainder;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // Make positive if negative
    if (num < 0) {
        num = -num;
    }

    while (num > 0) {
        remainder = num % 10;
        if (remainder > maxDigit) {
            maxDigit = remainder;
        }
        num = num / 10;
    }

    printf("Max digit is: %d\n", maxDigit);

    return 0;
}
