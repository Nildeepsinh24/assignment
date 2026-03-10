#include <iostream>
#include <string>

using namespace std;

// Base Class
class Person {
protected:
    string name;
    int age;

public:
    void readPersonData() {
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter Age: ";
        cin >> age;
    }

    void writePersonData() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

// Derived Class 1
class Student : public Person {
private:
    float percentage;

public:
    void initializeStudent() {
        cout << "\n--- Enter Student Data ---" << endl;
        readPersonData();
        cout << "Enter Percentage: ";
        cin >> percentage;
    }

    void displayStudent() {
        cout << "\n--- Student Details ---" << endl;
        writePersonData();
        cout << "Percentage: " << percentage << "%" << endl;
    }
};

// Derived Class 2
class Teacher : public Person {
private:
    float salary;

public:
    void initializeTeacher() {
        cout << "\n--- Enter Teacher Data ---" << endl;
        readPersonData();
        cout << "Enter Salary: ";
        cin >> salary;
    }

    void displayTeacher() {
        cout << "\n--- Teacher Details ---" << endl;
        writePersonData();
        cout << "Salary: " << salary << endl;
    }
};

int main() {
    Student s;
    Teacher t;

    s.initializeStudent();
    t.initializeTeacher();

    s.displayStudent();
    t.displayTeacher();

    return 0;
}
