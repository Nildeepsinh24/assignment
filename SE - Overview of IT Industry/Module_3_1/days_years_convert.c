#include <stdio.h>

int main() {
    int days = 1000;
    float years_converted = days / 365.25; // Accounting for leap years

    float years = 2.5;
    int days_converted = years * 365.25;

    printf("%d days is approximately %.2f years.\n", days, years_converted);
    printf("%.2f years is approximately %d days.\n", years, days_converted);

    return 0;
}
