DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

\c sdc;

DROP TABLE IF EXISTS public.reviews;

CREATE TABLE reviews (
  productId INTEGER,
  username varchar(30),
  body varchar(200),
  score SMALLINT,
  likes SMALLINT,
  dislikes SMALLINT,
  reliability BOOLEAN,
  durability BOOLEAN,
  looks BOOLEAN,
  performance BOOLEAN,
  value BOOLEAN
);

\copy public.reviews(productId, username, body, score, likes, dislikes, reliability, durability, looks, performance, value) from 'output.csv' delimiter ',' csv header;