#include <stdio.h>

void sortArray(int arr[], int n, int order) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (order == 1) { // Ascending
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else if (order == 2) { // Descending
                if (arr[j] < arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}

int main() {
    int n1, n2, order;

    printf("Enter number of elements in Array 1: ");
    scanf("%d", &n1);
    int arr1[n1];
    printf("Enter %d elements for Array 1: ", n1);
    for (int i = 0; i < n1; i++) scanf("%d", &arr1[i]);

    printf("Enter number of elements in Array 2: ");
    scanf("%d", &n2);
    int arr2[n2];
    printf("Enter %d elements for Array 2: ", n2);
    for (int i = 0; i < n2; i++) scanf("%d", &arr2[i]);

    printf("Sort by: 1. Ascending 2. Descending : ");
    scanf("%d", &order);

    sortArray(arr1, n1, order);
    sortArray(arr2, n2, order);

    printf("Sorted Array 1:\n");
    for (int i = 0; i < n1; i++) printf("%d ", arr1[i]);
    printf("\nSorted Array 2:\n");
    for (int i = 0; i < n2; i++) printf("%d ", arr2[i]);
    printf("\n");

    return 0;
}
