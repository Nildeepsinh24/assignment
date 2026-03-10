#include <stdio.h>

int main() {
    int choice;
    double num1, num2, result;

    while (1) {
        printf("\n--- Menu Driven Calculator ---\n");
        printf("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit\n");
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        if (choice == 5) {
            printf("Exiting program.\n");
            break;
        }

        if(choice >= 1 && choice <= 4) {
            printf("Enter two numbers: ");
            scanf("%lf %lf", &num1, &num2);
            
            switch (choice) {
                case 1:
                    result = num1 + num2;
                    printf("Result: %.2lf\n", result);
                    break;
                case 2:
                    result = num1 - num2;
                    printf("Result: %.2lf\n", result);
                    break;
                case 3:
                    result = num1 * num2;
                    printf("Result: %.2lf\n", result);
                    break;
                case 4:
                    if (num2 != 0) {
                        result = num1 / num2;
                        printf("Result: %.2lf\n", result);
                    } else {
                        printf("Error! Division by zero is not allowed.\n");
                    }
                    break;
            }
        } else {
            printf("Invalid choice. Please select from menu.\n");
        }
    }
    return 0;
}
