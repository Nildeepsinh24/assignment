#include <stdio.h>

int main() {
    // Pattern 1
    printf("Pattern 1:\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            if ((i + j) % 2 == 0) printf("1 ");
            else printf("0 ");
        }
        printf("\n");
    }

    // Pattern 2
    printf("\nPattern 2:\n");
    char start = 'A';
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%c ", start++);
        }
        printf("\n");
    }

    // Pattern 3
    printf("\nPattern 3:\n");
    for (int i = 1; i <= 5; i++) {
        for (int s = 5; s > i; s--) printf("  ");
        for (int j = 1; j <= (2*i - 1); j++) printf("* ");
        printf("\n");
    }

    // Pattern 4
    printf("\nPattern 4:\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) printf("* ");
        printf("\n");
    }
    for (int i = 4; i >= 1; i--) {
        for (int j = 1; j <= i; j++) printf("* ");
        printf("\n");
    }
    
    // Pattern 5
    printf("\nPattern 5:\n");
    int num = 1;
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", num++);
        }
        printf("\n");
    }

    // Pattern 6
    printf("\nPattern 6:\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 0; j < i; j++) {
            printf("%c ", 'A' + j);
        }
        printf("\n");
    }

    return 0;
}
