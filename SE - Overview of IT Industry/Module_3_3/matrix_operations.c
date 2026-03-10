#include <stdio.h>

int main() {
    int r = 2, c = 2; // Fixed dimension for demo (can be dynamic)
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int add[2][2], sub[2][2], mul[2][2];

    printf("Matrix A:\n");
    for(int i=0;i<r;i++) {
        for(int j=0;j<c;j++) printf("%d ", a[i][j]);
        printf("\n");
    }
    
    printf("\nMatrix B:\n");
    for(int i=0;i<r;i++) {
        for(int j=0;j<c;j++) printf("%d ", b[i][j]);
        printf("\n");
    }

    // Addition & Subtraction
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            add[i][j] = a[i][j] + b[i][j];
            sub[i][j] = a[i][j] - b[i][j];
        }
    }

    // Multiplication
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            mul[i][j] = 0;
            for (int k = 0; k < c; ++k) {
                mul[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    printf("\nAddition:\n");
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            printf("%d  ", add[i][j]);
        }
        printf("\n");
    }

    printf("\nSubtraction:\n");
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            printf("%d  ", sub[i][j]);
        }
        printf("\n");
    }

    printf("\nMultiplication:\n");
    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            printf("%d  ", mul[i][j]);
        }
        printf("\n");
    }

    return 0;
}
