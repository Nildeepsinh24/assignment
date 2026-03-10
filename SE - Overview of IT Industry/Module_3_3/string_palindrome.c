#include <stdio.h>

int main() {
    char str[100], rev[100];
    int len = 0, i = 0, flag = 0;

    printf("Enter a string: ");
    scanf("%s", str);

    // Calculate length
    while (str[len] != '\0') {
        len++;
    }

    // Reverse string
    int end = len - 1;
    while (end >= 0) {
        rev[i] = str[end];
        i++;
        end--;
    }
    rev[i] = '\0';
    
    printf("Reversed String: %s\n", rev);

    // Check Palindrome
    for (i = 0; i < len; i++) {
        if (str[i] != rev[i]) {
            flag = 1;
            break;
        }
    }

    if (flag == 0)
        printf("%s is a Palindrome.\n", str);
    else
        printf("%s is NOT a Palindrome.\n", str);

    return 0;
}
