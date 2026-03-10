#include <iostream>

using namespace std;

class Calculator {
public:
    double add(double a, double b) { return a + b; }
    double subtract(double a, double b) { return a - b; }
    double multiply(double a, double b) { return a * b; }
    double divide(double a, double b) {
        if (b != 0) return a / b;
        else {
            cout << "Error: Division by zero" << endl;
            return 0; // Or handle error properly
        }
    }
    int modulo(int a, int b) {
        if (b != 0) return a % b;
        else {
            cout << "Error: Division by zero" << endl;
            return 0;
        }
    }
};

int main() {
    Calculator calc;
    double x, y;
    int a, b;
    
    cout << "Enter two numbers for float operations: ";
    cin >> x >> y;
    cout << "Addition: " << calc.add(x, y) << endl;
    cout << "Subtraction: " << calc.subtract(x, y) << endl;
    cout << "Multiplication: " << calc.multiply(x, y) << endl;
    cout << "Division: " << calc.divide(x, y) << endl;

    cout << "\nEnter two integers for modulo operation: ";
    cin >> a >> b;
    cout << "Modulo: " << calc.modulo(a, b) << endl;

    return 0;
}
