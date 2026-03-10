#include <stdio.h>

int main() {
    int num, firstDigit, lastDigit, sum = 0;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if(num < 0) {
        printf("Please enter a positive number.\n");
        return 1;
    }

    lastDigit = num % 10;
    firstDigit = num;

    while (firstDigit >= 10) {
        firstDigit = firstDigit / 10;
    }

    sum = firstDigit + lastDigit;
    printf("Sum of first and last digit is: %d\n", sum);

    return 0;
}
