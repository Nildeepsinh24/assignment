#include <stdio.h>

struct Employee {
    int empno;
    char empname[50];
    char address[100];
    int age;
};

int main() {
    struct Employee employees[5];

    for (int i = 0; i < 5; i++) {
        printf("Enter details for Employee %d (no name address age):\n", i + 1);
        scanf("%d %s %s %d", &employees[i].empno, employees[i].empname, employees[i].address, &employees[i].age);
    }

    printf("\n--- Employee Details ---\n");
    for (int i = 0; i < 5; i++) {
        printf("EmpNo: %d | Name: %s | Address: %s | Age: %d\n",
               employees[i].empno, employees[i].empname, employees[i].address, employees[i].age);
    }

    return 0;
}
