CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    location TEXT NOT NULL,
    date TEXT NOT NULL
);