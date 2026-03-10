#include <stdio.h>

int main() {
    float principal = 10000.0;
    float rate = 5.0;
    float time = 2.0;

    float simple_interest = (principal * rate * time) / 100.0;

    printf("Principal Amount: %.2f\n", principal);
    printf("Rate of Interest: %.2f%%\n", rate);
    printf("Time (in years): %.2f\n", time);
    printf("Simple Interest: %.2f\n", simple_interest);

    return 0;
}
