CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    auth_id TEXT,
    first_name TEXT,
    last_name TEXT,
    address VARCHAR(200),
    cart INTEGER[]
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_name TEXT,
    description TEXT,
    phrase text,
    price FLOAT

);

CREATE TABLE cart (
    user_id INTEGER,
    product_id INTEGER
);

CREATE TABLE pictures (
    product_id INTEGER,
    imgurl TEXT
)
