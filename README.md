# ec2-db-seed

This repo is designed to seed a remote database.
Namely ones hosted on an AWS EC2 instance with node.js and either
PostgreSQL OR MongoDB installed.

## To use this repo

1) Make sure your instance has following installed
  - node.js 8.x or later
  - one of the following database systems
    - PostgreSQL
    - MongoDB

2) Start up either your PostgreSQL or MongoDB service
  - For PostgreSQL 
    - in case there is a postgresql service running, shut it down with
      - `sudo service postrgresql stop`
    - start postgresql service
      - `sudo service postgresql start`
  - For MongoDB 
    - in case there is a mongod service running, shut it down with
      - `sudo service mongod stop`
    - start postgresql service
      - `sudo service mongod start`

3) In the root of this repo
  - For PostgreSQL, the schema.sql file copies a .csv file named 'output.csv'
    1) First, generate a CSV
        - `npm run generate`
    2) Copy that .csv to your postgresql database
        - `npm run pgc`

  - If you're using MongoDB
      - `npm run mongo-seed`