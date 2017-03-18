# Schema Information

## Users


| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, unique, indexed |
| name            | string    | not null                  |
| password_digest | string    | not null                  |
| session_token   | string    | not null, unique, indexed |
| about_me        | text      |                           |
| image_url       | string    |                           |
| region_id       | integer   | foreign_key               |

Associations: users will have many bookings, and reviews; belong to a region		
Associations: hosts will have many listings, bookings		

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
| max_guests    | integer   |                                |
| property_type | string    |                                |
| house_rules   | text      |                                |

Associations: listings will belong to a host (user), and a region, and have many bookings, reviews, and images		

## Regions
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| city        | string    | not null              |
| state       | string    | not null              |
| image_url   | string    | not null              |
| latitude    | float     | not null              |
| longitude   | float     | not null              |

Associations: regions will have many listings		

## Bookings
| column name    | data type | details                        |
|----------------|-----------|--------------------------------|
| id             | integer   | not null, primary key          |
| listing_id     | integer   | foreign key, not null, indexed |
| user_id        | integer   | foreign key, not null, indexed |
| check_in_date  | date      | not null                       |
| check_out_date | date      | not null                       |

Associations: bookings will belong to a listing and a user		

## Reviews

| column name     | data type | details                        |
|-----------------|-----------|--------------------------------|
| id              | integer   | not null, primary key          |
| listing_id      | integer   | foreign key, not null, indexed |
| author_id       | integer   | foreign key, not null, indexed |
| rating          | integer   | not null                       |
| title           | string    |                                |
| body            | text      |                                |

Associations: reviews will belong to a listing and an author (user)		
