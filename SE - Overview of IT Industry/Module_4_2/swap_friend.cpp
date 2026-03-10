#include <iostream>

using namespace std;

class Number {
private:
    int a, b;

public:
    void getNumbers() {
        cout << "Enter two numbers separated by space: ";
        cin >> a >> b;
    }

    void displayNumbers() {
        cout << "a = " << a << ", b = " << b << endl;
    }

    // Friend function declaration
    friend void swapNumbers(Number &num);
};

// Friend function definition
void swapNumbers(Number &num) {
    // Swapping without third variable
    num.a = num.a + num.b;
    num.b = num.a - num.b;
    num.a = num.a - num.b;
}

int main() {
    Number n;

    n.getNumbers();

    cout << "\nBefore Swapping:" << endl;
    n.displayNumbers();

    swapNumbers(n); // Call friend function

    cout << "\nAfter Swapping:" << endl;
    n.displayNumbers();

    return 0;
}
