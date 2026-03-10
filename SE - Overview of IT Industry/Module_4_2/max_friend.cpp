#include <iostream>

using namespace std;

class ClassB; // Forward declaration

class ClassA {
private:
    int a;

public:
    void setA(int val) {
        a = val;
    }
    
    // Declare friend function
    friend void findMax(ClassA, ClassB);
};

class ClassB {
private:
    int b;

public:
    void setB(int val) {
        b = val;
    }
    
    // Declare friend function
    friend void findMax(ClassA, ClassB);
};

// Define friend function
void findMax(ClassA objA, ClassB objB) {
    if (objA.a > objB.b) {
        cout << "Maximum is " << objA.a << " (from Class A)" << endl;
    } else if (objB.b > objA.a) {
        cout << "Maximum is " << objB.b << " (from Class B)" << endl;
    } else {
        cout << "Both are equal: " << objA.a << endl;
    }
}

int main() {
    ClassA num1;
    ClassB num2;

    int x, y;

    cout << "Enter first number: ";
    cin >> x;
    num1.setA(x);

    cout << "Enter second number: ";
    cin >> y;
    num2.setB(y);

    findMax(num1, num2);

    return 0;
}
