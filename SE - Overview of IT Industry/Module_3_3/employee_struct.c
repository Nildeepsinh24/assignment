#include <stdio.h>

struct Employee {
    int empno;
    char empname[50];
    char address[100];
    int age;
};

int main() {
    struct Employee emp1 = {101, "Amit Patel", "Ahmedabad", 28};

    printf("Employee Info:\n");
    printf("Emp No: %d\n", emp1.empno);
    printf("Name: %s\n", emp1.empname);
    printf("Address: %s\n", emp1.address);
    printf("Age: %d\n", emp1.age);

    return 0;
}
