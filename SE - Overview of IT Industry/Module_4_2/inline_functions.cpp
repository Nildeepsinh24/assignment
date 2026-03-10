#include <iostream>

using namespace std;

inline double multiply(double a, double b) {
    return a * b;
}

inline double cube(double a) {
    return a * a * a;
}

int main() {
    double x, y;

    cout << "Enter two numbers for multiplication: ";
    cin >> x >> y;
    cout << "Multiplication of " << x << " and " << y << " is " << multiply(x, y) << endl;

    cout << "Enter a number to find its cubic value: ";
    double z;
    cin >> z;
    cout << "Cubic value of " << z << " is " << cube(z) << endl;

    return 0;
}
