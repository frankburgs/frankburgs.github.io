``` sql
CREATE DATABASE mydb; -- Create db.

USE mydb; -- Semicolon optional on USE.

CREATE TABLE Fasteners(
    id INT PRIMARY KEY AUTO_INCREMENT,
    desc1 VARCHAR(255) NOT_NULL UNIQUE, -- TEXT.
    desc2 VARCHAR(255) NOT_NULL,
    desc3 DECIMAL(5,2), NOT_NULL, --5 digits total, 2 after the period.
    qty INT
);

SHOW DATABASES; -- Show

INSERT INTO Fasteners(desc1, desc2, qty)
VALUES("1/4-20", "HH", 3.5, 100)

SELECT desc1, qty FROM Fasteners
ORDER BY id ASC; -- Ascending.
WHERE desc1 = '1/4-20'
AND desc2 LIKE 'f%' -- Starts with an f.
LIMIT 2;

```

# Database

- 1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 mb, 1 TB = 1024 GB

- Secure, removes redundancy, program-data independence, shares data multi user transactions, adheres to ACID concept, self describing, multiple view support, allows table formation, multi-user environment.

## Policies
- Acceptable use, continuous monitoring, data collection, classification, ownership, & retention, password.

## Backups
- Performed by Relational Database Management System (RDMS) or database manager.
- 3 2 1 rule, 3 backups of all critical data, 1 primary and 2 more, on premises with 2 storage types, 1 offsite backup.
### Full
- All files typically on a preset schedule.
- May need large file support.
- Fastest type because recovery is from one archive file (includes many files and metadata).
### Incremental
- Saves storage, fastest to perform.
- Longest to recover from due to large number of archive files.
### Differential
- Requires last full backup.
- Includes last full and last differential backup.
- Recovery only pulls from last full and last differential backup.
### Virtual
- Uses database to track & maintain data.

## Commands
### Data Definition Language (DDL)
- Consists of SQL commands used to define the schema. 
- Can create modify, delete database structures but not the data.
- Create, alter, drop, truncate

### Data manipulation language (DML)
- Most of SQL commands for data manipulation, controls access to data and database.
- Insert, update, delete, select

### Data control language (DCL)
- Rights, permissions and other controls of the DB system, modify structures of objects.
- Grant, revoke

## Access
- Direct, using SQL commands (terminal ?)
- Programmatic, using a programming language, can do more safely.
- User interface, through a DB program (menu based (web), GUI (displays schema diagrammatically), DBMS, natural language interface, search engine)
- Query, using SELECT statement, included in software like Microsoft Access, Query Builder's GUI is designed for query tasks.
- Query can work with a graphical representation or SQL code. Automatically joins related tables, can query and update, (Chartio Visual SQL, dbForge Query Builder for SQL Server, Active Query Builder, FlySpeed SQL, QueryDbVis Query Builder) 

## Nonrelational
- Means a non-tabular form, and tends to be more flexible than traditional SQL based structures.
- Non-SQL (NoSQL DB)
- Wide range of different data can be stored using specialized formats or frameworks.
- Ideal for storing & combining big & unstructured data.
- MongoDB, Apache Cassandra & HBase, Redis, Couchbase

## Relational
- Rows called records, stores related data with a defined relationship, connects multiple tables of data with unique identifiers.
- Applies to structured data sources with relationship.
- MySQL, IBM DB2, Oracle, SQLite, Postgres, MS-SQL
- A table is 1 or more columns of data.
- Schema is a collection of tables, a db can have more than one.


# Most common types of data stores

## Document 
- handles objects, data values,
- Is named string fields in an entity referred to as a document.
- Generally store data in the form of JSON documents.

## Key-value
- Uses unique key to correct hashing functions.
- Simple lookup functions using value of a range of keys.

## Column-oriented databases
- Rows & cols divided into column families, with each set of columns consisting of logically-related entities that are generally retrieved as a unit.
## Graph databases
- Edges (relationships) & nodes (the data).
- Be able to quickly traverse looking at relationships (edges)


# Permissions

- Only a DBA or object owner can provide or remove permissions.
- Public role is automatically assigned to user.
## Database
- Right to execute a specific SQL statement.
- Access second persons's object.
- Control computing resources.
- Does not apply to DBA.
## System
- Right to perform any activity.
- Ability to add or delete columns or rows.
## Object
- Right to perform specific actions.
- Allows users to UPDATE, DELETE, INSERT, or SELECT data.
- Object's owner has permissions for that object.

# Types of data
## Structured
- Tabular data, rows & cols.
- These are relational databases.
- Formed set of data.
## Semi-structured
- Like JSON, also contain graph databases.
## Unstructured
- Not in predefined model or data structure.
- Text heavy files, but may contain numbers and dates.
- Videos, images, audio, sensor data, server & website app logs, social media data, emails, and other types.