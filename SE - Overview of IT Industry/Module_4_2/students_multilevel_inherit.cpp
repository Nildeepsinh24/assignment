#include <iostream>

using namespace std;

// Base class
class Students {
protected:
    int roll_number;

public:
    void setRollNumber(int r) {
        roll_number = r;
    }
    void putRollNumber() {
        cout << "Roll Number: " << roll_number << endl;
    }
};

// Intermediate derived class
class Test : public Students {
protected:
    float subject1_marks;
    float subject2_marks;

public:
    void setMarks(float m1, float m2) {
        subject1_marks = m1;
        subject2_marks = m2;
    }
    void putMarks() {
        cout << "Marks in Subject 1: " << subject1_marks << endl;
        cout << "Marks in Subject 2: " << subject2_marks << endl;
    }
};

// Final derived class (Multilevel Inheritance)
class Result : public Test {
private:
    float total_marks;

public:
    void displayResult() {
        putRollNumber(); // From Students
        putMarks();      // From Test
        
        total_marks = subject1_marks + subject2_marks;
        cout << "Total Marks: " << total_marks << endl;
    }
};

int main() {
    Result student1;

    student1.setRollNumber(101);
    student1.setMarks(88.5, 92.0);

    cout << "--- Student Result ---" << endl;
    student1.displayResult();

    return 0;
}
