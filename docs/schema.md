# Schema Information

## Users
|                 |           |                           |
|-----------------|-----------|---------------------------|
| column name     | data type | details                   |
| id              | integer   | not null, primary key     |
| username        | string    | not null, unique, indexed |
| password_digest | string    | not null                  |
| session_token   | string    | not null, unique, indexed |
| about_me        | text      |                           |
| image_url       | string    |                           |
| region_id       | integer   | foreign_key               |

Associations: users will have many bookings, and reviews		
Associations: hosts will have many listings, and bookings		

## Listings
| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| host_id       | integer   | foreign key, not null, indexed |
| title         | string    | not null                       |
| longitude     | float     | not null, unique, indexed      |
| latitude      | float     | not null, unique, indexed      |
| image_url     | string    | not null                       |
| description   | text      |                                |
| region_id     | integer   | not null, foreign_key          |
| max_guests    | integer   | not null                       |
| property_type | string    | not null                       |
| house_rules   | text      |                                |

Associations: listings will belong to a host(user), and a region, and have many bookings, reviews, and images		

## notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
