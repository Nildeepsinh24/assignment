#include <iostream>

using namespace std;

// Template function to swap two values
template <typename T>
void swapValues(T &a, T &b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int i1 = 10, i2 = 20;
    cout << "Before swap - Ints: i1=" << i1 << ", i2=" << i2 << endl;
    swapValues(i1, i2);
    cout << "After swap - Ints: i1=" << i1 << ", i2=" << i2 << "\n\n";

    double d1 = 5.5, d2 = 9.9;
    cout << "Before swap - Doubles: d1=" << d1 << ", d2=" << d2 << endl;
    swapValues(d1, d2);
    cout << "After swap - Doubles: d1=" << d1 << ", d2=" << d2 << "\n\n";

    char c1 = 'A', c2 = 'Z';
    cout << "Before swap - Chars: c1=" << c1 << ", c2=" << c2 << endl;
    swapValues(c1, c2);
    cout << "After swap - Chars: c1=" << c1 << ", c2=" << c2 << endl;

    return 0;
}
