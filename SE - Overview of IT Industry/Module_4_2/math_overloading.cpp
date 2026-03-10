#include <iostream>

using namespace std;

class MathOperations {
public:
    // Function Overloading for addition
    int operate(int a, int b) { 
        cout << "Executing int addition: ";
        return a + b; 
    }
    
    // Function Overloading for subtraction using doubles
    double operate(double a, double b) { 
        cout << "Executing double subtraction: ";
        return a - b; 
    }

    // Function Overloading for multiplication using floats
    float operate(float a, float b) {
        cout << "Executing float multiplication: ";
        return a * b;
    }

    // Function Overloading for division (using different parameter count just as an example)
    double operate(double a, double b, bool isDivision) {
        if(isDivision) {
            cout << "Executing double division: ";
            if(b!=0) return a / b;
            return 0;
        }
        return 0;
    }
};

int main() {
    MathOperations math;

    cout << math.operate(10, 5) << endl;                      // Add
    cout << math.operate(15.5, 5.2) << endl;                  // Subtract
    cout << math.operate(4.0f, 2.5f) << endl;                 // Multiply
    cout << math.operate(20.0, 4.0, true) << endl;            // Divide

    return 0;
}
