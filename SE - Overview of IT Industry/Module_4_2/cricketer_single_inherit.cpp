#include <iostream>
#include <string>

using namespace std;

// Base Class
class Cricketer {
protected:
    string name;
    int matches;

public:
    void inputCricketerData() {
        cout << "Enter Cricketer Name: ";
        cin.ignore();
        getline(cin, name);
        cout << "Enter Matches Played: ";
        cin >> matches;
    }
};

// Derived Class
class Batsman : public Cricketer {
private:
    int total_runs;
    double average_runs;
    int best_performance;

public:
    void inputData() {
        inputCricketerData(); // Call base class
        cout << "Enter Total Runs: ";
        cin >> total_runs;
        cout << "Enter Best Performance (Highest Score): ";
        cin >> best_performance;
        
        calculateAverageRuns();
    }

    void calculateAverageRuns() {
        if (matches != 0) {
            average_runs = static_cast<double>(total_runs) / matches;
        } else {
            average_runs = 0;
        }
    }

    void displayData() {
        cout << "\n--- Batsman Data ---" << endl;
        cout << "Name: " << name << endl;
        cout << "Matches Played: " << matches << endl;
        cout << "Total Runs: " << total_runs << endl;
        cout << "Best Performance: " << best_performance << endl;
        cout << "Average Runs: " << average_runs << endl;
    }
};

int main() {
    Batsman player;
    player.inputData();
    player.displayData();

    return 0;
}
