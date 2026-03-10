#include <iostream>
#include <string.h>

using namespace std;

class MyString {
private:
    char str[100];

public:
    MyString() {
        strcpy(str, "");
    }
    MyString(const char* s) {
        strcpy(str, s);
    }
    
    // Read string
    void get_string() {
        cout << "Enter string: ";
        cin.get(str, 100);
        cin.ignore();
    }

    // Print string
    void display() {
        cout << str;
    }

    // Operator Overloading for concatenation
    MyString operator+(MyString s) {
        MyString temp;
        strcpy(temp.str, str);
        strcat(temp.str, s.str);
        return temp;
    }
};

int main() {
    MyString s1("Hello, ");
    MyString s2("World!");
    MyString s3;

    cout << "String 1: ";
    s1.display();
    cout << "\nString 2: ";
    s2.display();

    // Using overloaded operator
    s3 = s1 + s2; 

    cout << "\n\nConcatenated String: ";
    s3.display();
    cout << endl;

    return 0;
}
