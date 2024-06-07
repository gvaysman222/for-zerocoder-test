CREATE TABLE buildings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    area REAL NOT NULL
);

CREATE TABLE invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    building_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    service_code TEXT NOT NULL,
    FOREIGN KEY (building_id) REFERENCES buildings(id)
);
