CREATE TABLE USERS_REGISTRATION(
    ID INT UNSIGNED NOT NULL,
    ACTIVATION_CODE CHAR(40) NOT NULL,
    FOREIGN KEY(ID) REFERENCES USERS(ID)
) ENGINE=MYISAM COLLATE LATIN1_GENERAL_CS;