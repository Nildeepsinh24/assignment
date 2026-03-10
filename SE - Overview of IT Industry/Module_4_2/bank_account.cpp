#include <iostream>
#include <string>

using namespace std;

class BankAccount {
private:
    string depositorName;
    string accountNumber;
    string accountType;
    double balance;

public:
    // 1. To assign values
    void assignValues(string name, string accNum, string accType, double initialBalance) {
        depositorName = name;
        accountNumber = accNum;
        accountType = accType;
        balance = initialBalance;
    }

    // 2. To deposited an amount
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: " << amount << ". New Balance: " << balance << endl;
        }
    }

    // 3. To withdraw an amount after checking balance
    void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            cout << "Withdrew: " << amount << ". Remaining Balance: " << balance << endl;
        } else {
            cout << "Insufficient balance or invalid amount." << endl;
        }
    }

    // 4. To display name and balance
    void display() {
        cout << "\nAccount Details: " << endl;
        cout << "Name: " << depositorName << endl;
        cout << "Balance: " << balance << endl;
    }
};

int main() {
    BankAccount account;
    
    account.assignValues("John Doe", "1234567890", "Savings", 5000.0);
    account.display();
    
    account.deposit(2500.0);
    account.withdraw(1000.0);
    account.withdraw(10000.0); // Should fail

    account.display();

    return 0;
}
