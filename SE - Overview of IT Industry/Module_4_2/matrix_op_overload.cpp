#include <iostream>

using namespace std;

class Matrix1D {
private:
    int a[5];

public:
    void accept() {
        cout << "\nEnter 5 elements for Matrix: ";
        for (int i = 0; i < 5; i++) {
            cin >> a[i];
        }
    }

    void display() {
        for (int i = 0; i < 5; i++) {
            cout << a[i] << " ";
        }
        cout << endl;
    }

    // Overloading '+' operator
    Matrix1D operator+(Matrix1D x) {
        Matrix1D temp;
        for (int i = 0; i < 5; i++) {
            temp.a[i] = a[i] + x.a[i];
        }
        return temp;
    }
};

int main() {
    Matrix1D m1, m2, m3;

    cout << "--- For First Matrix ---";
    m1.accept();

    cout << "--- For Second Matrix ---";
    m2.accept();

    cout << "\nFirst Matrix: \n";
    m1.display();

    cout << "\nSecond Matrix: \n";
    m2.display();

    // Adding using overloaded operator
    m3 = m1 + m2; 
    
    cout << "\nAddition of two 1D Matrices is: \n";
    m3.display();

    return 0;
}
