#include <iostream>

using namespace std;

class ShapeArea {
public:
    // Area of Rectangle
    double calculateArea(double length, double breadth) {
        return length * breadth;
    }

    // Area of Triangle (half base * height => breadth * height as per question)
    double calculateArea(double base, float height) {
        return 0.5 * base * height;
    }

    // Area of Circle
    double calculateArea(double radius) {
        return 3.14159 * radius * radius;
    }
};

int main() {
    ShapeArea shape;

    cout << "Area of Rectangle (L=10, B=5): " << shape.calculateArea(10.0, 5.0) << endl;
    cout << "Area of Triangle (Base=8, Height=4.5): " << shape.calculateArea(8.0, 4.5f) << endl;
    cout << "Area of Circle (Radius=7): " << shape.calculateArea(7.0) << endl;

    return 0;
}
