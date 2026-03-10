#include <iostream>

using namespace std;

// Template function to sort an array using basic Bubble Sort
template <typename T>
void sortArray(T arr[], int size) {
    for (int i = 0; i < size - 1; ++i) {
        for (int j = 0; j < size - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                T temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Template function to print an array
template <typename T>
void printArray(T arr[], int size) {
    for (int i = 0; i < size; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    // Integer Array
    int intArr[] = {64, 34, 25, 12, 22, 11, 90};
    int intSize = sizeof(intArr) / sizeof(intArr[0]);
    
    cout << "Integer Array Before Sorting: ";
    printArray(intArr, intSize);
    
    sortArray(intArr, intSize);
    
    cout << "Integer Array After Sorting: ";
    printArray(intArr, intSize);
    cout << "\n";

    // Double Array
    double doubleArr[] = {4.5, 1.2, 5.7, 3.3, 0.9};
    int doubleSize = sizeof(doubleArr) / sizeof(doubleArr[0]);
    
    cout << "Double Array Before Sorting: ";
    printArray(doubleArr, doubleSize);
    
    sortArray(doubleArr, doubleSize);
    
    cout << "Double Array After Sorting: ";
    printArray(doubleArr, doubleSize);

    return 0;
}
