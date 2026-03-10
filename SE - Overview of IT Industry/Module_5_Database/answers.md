# Module 5: Database Assignment

## What do you understand By Database
A **Database** is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

## What is Normalization?
**Normalization** is the process of organizing data in a database. This includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency. Key normal forms include 1NF (atomic values), 2NF (no partial dependencies), and 3NF (no transitive dependencies).

## What is Difference between DBMS and RDBMS?
| Feature | DBMS (Database Management System) | RDBMS (Relational Database Management System) |
| --- | --- | --- |
| **Data Storage** | Stores data as files. | Stores data in tabular form (Rows and Columns). |
| **Relationships** | Does not support relationships between independent data units easily. | Easily supports relationships between tables via foreign keys. |
| **Normalization** | Not supported. | Fully supported to prevent redundancy. |
| **Data Access** | Slower for complex data structures. | Faster because of relational structure and indexing. |
| **Examples** | XML, Windows Registry | MySQL, Oracle, SQL Server, PostgreSQL |

## What is MF Cod Rule of RDBMS Systems?
Edgar F. Codd (E.F. Codd) defined 12 rules (actually 13, numbered 0 to 12) that define what is required from a DBMS for it to be considered relational. Key rules include:
1. **Information Rule**: All data must be explicitly represented as values in tables.
2. **Guaranteed Access Rule**: Every specific piece of data can be accessed by table name, primary key, and column name.
3. **Comprehensive Data Sublanguage**: Must support a language (like SQL) used for queries, operations, and defining structure.
4. **Physical & Logical Data Independence**: Changes in physical storage or logical schema should not affect application programs.

## What do you understand By Data Redundancy?
**Data Redundancy** occurs when the same piece of data exists in multiple places within a database. This happens when the database is not normalized properly. It wastes storage space and can lead to data anomalies (insertion, deletion, and updating anomalies).

## What is DDL Interpreter?
A **DDL (Data Definition Language) Interpreter** is a component in the DBMS architecture that translates DDL statements (like `CREATE`, `ALTER`, `DROP`) into a set of tables containing metadata (the data dictionary or system catalog). It updates the database schema but does not manipulate the actual end-user data.

## What is DML Compiler in SQL?
A **DML (Data Manipulation Language) Compiler** translates DML statements (like `SELECT`, `INSERT`, `UPDATE`, `DELETE`) into low-level instructions that the query evaluation engine can understand. It also works with the query optimizer to find the most efficient execution plan for extracting or modifying the requested data.

## What is SQL Key Constraints writing an Example of SQL Key Constraints
**SQL Key Constraints** are rules enforced on data columns to ensure the reliability, uniqueness, and integrity of the data within tables.
- **PRIMARY KEY**: Uniquely identifies each record.
- **FOREIGN KEY**: Uniquely identifies a record in another table.
- **UNIQUE**: Ensures all values in a column are different.

**Example**:
```sql
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,           -- Primary Key constraint
    Email VARCHAR(255) UNIQUE,       -- Unique constraint
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID) -- Foreign Key constraint
);
```

## What is save Point? How to create a save Point write a Query?
A **SAVEPOINT** in SQL is a marker within a transaction that allows you to roll back part of the transaction to that specific marker, rather than rolling back the entire transaction.

**Query Example**:
```sql
BEGIN TRANSACTION;
INSERT INTO Orders (OrderID, Product) VALUES (1, 'Laptop');
SAVEPOINT sp1; -- Creating a savepoint named sp1
INSERT INTO Orders (OrderID, Product) VALUES (2, 'Mouse');
ROLLBACK TO sp1; -- This will undo the 'Mouse' insertion but keep the 'Laptop' insertion.
COMMIT;
```

## What is trigger and how to create a Trigger in SQL?
A **Trigger** is a special type of stored procedure that automatically executes (or "fires") when a specific event occurs in the database server, such as an `INSERT`, `UPDATE`, or `DELETE` operation on a particular table.

**Example (Creating a trigger to log an update)**:
```sql
CREATE TRIGGER BeforeEmployeeUpdate
BEFORE UPDATE ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO EmployeeLog (EmpID, OldSalary, ChangeDate)
    VALUES (OLD.EmpID, OLD.Salary, NOW());
END;
```
