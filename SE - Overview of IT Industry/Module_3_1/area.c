#include <stdio.h>

int main() {
    float radius, length, width, base, height;
    float pi = 3.14159;

    // Area of Circle
    radius = 5.0;
    printf("Area of Circle (r=%.2f): %.2f\n", radius, pi * radius * radius);

    // Area of Rectangle
    length = 10.0;
    width = 4.0;
    printf("Area of Rectangle (l=%.2f, w=%.2f): %.2f\n", length, width, length * width);

    // Area of Triangle
    base = 6.0;
    height = 8.0;
    printf("Area of Triangle (b=%.2f, h=%.2f): %.2f\n", base, height, 0.5 * base * height);

    return 0;
}
