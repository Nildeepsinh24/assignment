-- 3. Create table given below: Employee and Incentive

-- Table Name: Employee
CREATE TABLE Employee (
    Employee_id INT PRIMARY KEY,
    First_name VARCHAR(50),
    Last_name VARCHAR(50),
    Salary DECIMAL(10,2),
    Joining_date DATETIME,
    Department VARCHAR(50)
);

INSERT INTO Employee (Employee_id, First_name, Last_name, Salary, Joining_date, Department) VALUES
(1, 'John', 'Abraham', 1000000, '2013-01-01 12:00:00', 'Banking'),
(2, 'Michael', 'Clarke', 800000, '2013-01-01 12:00:00', 'Insurance'),
(3, 'Roy', 'Thomas', 700000, '2013-02-01 12:00:00', 'Banking'),
(4, 'Tom', 'Jose', 600000, '2013-02-01 12:00:00', 'Insurance'),
(5, 'Jerry', 'Pinto', 650000, '2013-02-01 12:00:00', 'Insurance'),
(6, 'Philip', 'Mathew', 750000, '2013-01-01 12:00:00', 'Services'),
(7, 'TestName1', '123', 650000, '2013-01-01 12:00:00', 'Services'),
(8, 'TestName2', 'Lname%', 600000, '2013-02-01 12:00:00', 'Insurance');

-- Table Name: Incentive
CREATE TABLE Incentive (
    Employee_ref_id INT,
    Incentive_date DATE,
    Incentive_amount DECIMAL(10,2),
    FOREIGN KEY (Employee_ref_id) REFERENCES Employee(Employee_id)
);

INSERT INTO Incentive (Employee_ref_id, Incentive_date, Incentive_amount) VALUES
(1, '2013-02-01', 5000),
(2, '2013-02-01', 3000),
(3, '2013-02-01', 4000),
(1, '2013-01-01', 4500),
(2, '2013-01-01', 3500);

-- a) Get First_Name from employee table using Tom name "Employee Name".
SELECT First_name AS "Employee Name" FROM Employee;

-- b) Get FIRST_NAME, Joining Date, and Salary from employee table.
SELECT First_name, Joining_date, Salary FROM Employee;

-- c) Get all employee details from the employee table order by First_Name Ascending and Salary descending?
SELECT * FROM Employee ORDER BY First_name ASC, Salary DESC;

-- d) Get employee details from employee table whose first name contains 'J'.
SELECT * FROM Employee WHERE First_name LIKE '%J%';

-- e) Get department wise maximum salary from employee table order by salary ascending?
SELECT Department, MAX(Salary) AS Max_Salary 
FROM Employee 
GROUP BY Department 
ORDER BY Max_Salary ASC;

-- f) Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT e.First_name, i.Incentive_amount 
FROM Employee e
INNER JOIN Incentive i ON e.Employee_id = i.Employee_ref_id
WHERE i.Incentive_amount > 3000;

-- g) Create After Insert trigger on Employee table which insert records in view table
-- Note: Instead of a view, triggers usually insert into backup/audit tables. Assuming an Employee_Backup table exists.
CREATE TABLE Employee_Backup (
    Employee_id INT,
    First_name VARCHAR(50),
    Last_name VARCHAR(50),
    Salary DECIMAL(10,2),
    Joining_date DATETIME,
    Department VARCHAR(50)
);

DELIMITER //
CREATE TRIGGER After_Employee_Insert
AFTER INSERT ON Employee
FOR EACH ROW
BEGIN
    INSERT INTO Employee_Backup (Employee_id, First_name, Last_name, Salary, Joining_date, Department)
    VALUES (NEW.Employee_id, NEW.First_name, NEW.Last_name, NEW.Salary, NEW.Joining_date, NEW.Department);
END;
//
DELIMITER ;


-- 4. Create table given below: Salesperson and Customer

-- TABLE NAME - SALESPERSON
CREATE TABLE Salesperson (
    SNo INT PRIMARY KEY,
    SNAME VARCHAR(50),
    CITY VARCHAR(50),
    COMM DECIMAL(4,2)
);

INSERT INTO Salesperson (SNo, SNAME, CITY, COMM) VALUES
(1001, 'Peel', 'London', 0.12),
(1002, 'Serres', 'San Jose', 0.13),
(1004, 'Motika', 'London', 0.11),
(1007, 'Rafkin', 'Barcelona', 0.15),
(1003, 'Axelrod', 'New York', 0.10);

-- TABLE NAME - CUSTOMER
CREATE TABLE Customer (
    CNM INT PRIMARY KEY,
    CNAME VARCHAR(50),
    CITY VARCHAR(50),
    RATING INT,
    SNo INT,
    FOREIGN KEY (SNo) REFERENCES Salesperson(SNo)
);

INSERT INTO Customer (CNM, CNAME, CITY, RATING, SNo) VALUES
(201, 'Hoffman', 'London', 100, 1001),
(202, 'Giovanne', 'Roe', 200, 1003),
(203, 'Liu', 'San Jose', 300, 1002),
(204, 'Grass', 'Barcelona', 300, 1002),
(206, 'Clemens', 'London', 300, 1007),
(207, 'Pereira', 'Roe', 100, 1004);

-- Retrieve the below data from above table

-- a) All orders for more than $1000.
-- Note: 'Orders' table is not provided in the schema, but assuming an Orders table (ONM, AMT, ODATE, CNM, SNo) exists:
-- SELECT * FROM Orders WHERE AMT > 1000;

-- b) Names and cities of all salespeople in London with commission above 0.12
SELECT SNAME, CITY FROM Salesperson WHERE CITY = 'London' AND COMM > 0.12;

-- c) All salespeople either in Barcelona or in London
SELECT * FROM Salesperson WHERE CITY IN ('Barcelona', 'London');

-- d) All salespeople with commission between 0.10 and 0.12. (Boundary values should be excluded).
SELECT * FROM Salesperson WHERE COMM > 0.10 AND COMM < 0.12;

-- e) All customers excluding those with rating <= 100 unless they are located in Rome
SELECT * FROM Customer WHERE RATING > 100 OR CITY = 'Rome';
