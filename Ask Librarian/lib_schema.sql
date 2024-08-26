-- Schema for the library management system (Library)
-- type ctrl + shift + p
-- Sqlite : run query
-- https://www.youtube.com/watch?v=IBgWKTaG_Bs


CREATE TABLE magazine (
  magazine_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  title TEXT DEFAULT NULL,
  publisher TEXT DEFAULT NULL,
  publish_date TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL
);

CREATE TABLE newspaper (
  newspaper_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  title TEXT DEFAULT NULL,
  publisher TEXT DEFAULT NULL,
  publish_date TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL
);

CREATE TABLE journal (
  journal_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  title TEXT DEFAULT NULL,
  publisher TEXT DEFAULT NULL,
  publish_date TEXT DEFAULT NULL,
  ISBN TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL,
  borrow_status INTEGER DEFAULT NULL,
  borrow_count INTEGER DEFAULT NULL
);

CREATE TABLE book (
  book_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  title TEXT DEFAULT NULL,
  author TEXT DEFAULT NULL,
  publisher TEXT DEFAULT NULL,
  publish_date TEXT DEFAULT NULL,
  ISBN TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL,
  borrow_status INTEGER DEFAULT NULL,
  borrow_count INTEGER DEFAULT NULL
);

CREATE TABLE library (
  shelf_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  library_name TEXT DEFAULT NULL,
  book_id INTEGER DEFAULT NULL,
  journal_id INTEGER DEFAULT NULL,
  magazine_id INTEGER DEFAULT NULL,
  newspaper_id INTEGER DEFAULT NULL,
  cafe_id INTEGER DEFAULT NULL,
  conf_room_id INTEGER DEFAULT NULL,
  workstation_id INTEGER DEFAULT NULL,
  discussion_area_id INTEGER DEFAULT NULL,
  account_id INTEGER DEFAULT NULL,
  librarian_id INTEGER DEFAULT NULL,
  CONSTRAINT fk_book
    FOREIGN KEY (book_id)
    REFERENCES book(book_id),
  CONSTRAINT fk_journal
    FOREIGN KEY (journal_id)
    REFERENCES journal(journal_id),
  CONSTRAINT fk_newspaper
    FOREIGN KEY (newspaper_id)
    REFERENCES newspaper(newspaper_id),
  CONSTRAINT fk_magazine
    FOREIGN KEY (magazine_id)
    REFERENCES magazine(magazine_id),
  CONSTRAINT fk_cafe
    FOREIGN KEY (cafe_id)
    REFERENCES cafe(cafe_id),
  CONSTRAINT conference_room
    FOREIGN KEY (conf_room_id)
    REFERENCES conference_room(conf_room_id),
  CONSTRAINT fk_workstation
    FOREIGN KEY (workstation_id)
    REFERENCES workstation(workstation_id),
  CONSTRAINT fk_discussion_area
    FOREIGN KEY (discussion_area_id)
    REFERENCES discussion_area(discussion_area_id),
  CONSTRAINT fk_account
    FOREIGN KEY (account_id)
    REFERENCES account(account_id),
  CONSTRAINT fk_librarian
    FOREIGN KEY (librarian_id)
    REFERENCES librarian(librarian_id)
);

CREATE TABLE account (
  account_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  info TEXT DEFAULT NULL,
  student_id INTEGER NOT NULL,
  library_id INTEGER NOT NULL,
  CONSTRAINT fk_student
    FOREIGN KEY (student_id)
    REFERENCES student(student_id),
  CONSTRAINT fk_library
    FOREIGN KEY (library_id)
    REFERENCES library(library_id)
);

CREATE TABLE student (
  student_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  email TEXT DEFAULT NULL,  -- username 
  password TEXT DEFAULT NULL,
  account_id INTEGER NOT NULL,
  CONSTRAINT fk_account
    FOREIGN KEY (account_id)
    REFERENCES account(account_id)
);

CREATE TABLE workstation (
  workstation_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  info TEXT DEFAULT NULL,
  occupancy INTEGER NOT NULL,
  date TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL
);

CREATE TABLE cafe (
  cafe_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  info TEXT DEFAULT NULL,
  occupancy INTEGER NOT NULL,
  no_table INTEGER NOT NULL,
  date TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL
);

CREATE TABLE conference_room (
  conf_room_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  info TEXT DEFAULT NULL,
  occupancy INTEGER NOT NULL,
  usage_duration INTEGER NOT NULL,
  date TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL
);

CREATE TABLE discussion_area (
  discussion_area_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  info TEXT DEFAULT NULL,
  occupancy INTEGER NOT NULL,
  usage_duration INTEGER NOT NULL,
  date TEXT DEFAULT NULL,
  location TEXT DEFAULT NULL
);

CREATE TABLE librarian (
  nibrarian_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  info TEXT DEFAULT NULL,
  library_id INTEGER NOT NULL,
  CONSTRAINT fk_library
    FOREIGN KEY (library_id)
    REFERENCES library(library_id)
);




-- Pre-loaded data into the database
-- Dumping data for table `candidate`
