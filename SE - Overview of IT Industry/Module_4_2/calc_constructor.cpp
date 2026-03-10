#include <iostream>

using namespace std;

class Calculation {
public:
    double addResult, subResult, mulResult, divResult;

    // Constructor to calculate on instantiation
    Calculation(double a, double b) {
        addResult = a + b;
        subResult = a - b;
        mulResult = a * b;
        if (b != 0) divResult = a / b;
        else divResult = 0; // Handle zero division gracefully
    }

    void display(double b) {
        cout << "Addition: " << addResult << endl;
        cout << "Subtraction: " << subResult << endl;
        cout << "Multiplication: " << mulResult << endl;
        if (b != 0) cout << "Division: " << divResult << endl;
        else cout << "Division Error: Divide by zero!" << endl;
    }
};

int main() {
    double x, y;
    
    cout << "Enter two numbers (for +, -, *, /) via constructor: ";
    cin >> x >> y;

    Calculation calc(x, y);
    calc.display(y);

    return 0;
}
