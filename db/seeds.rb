# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  username: 'Guest',
  name: "Guest Surfer",
  password: "password"
)

SanFrancisco = Region.create!(
  city: "San Francisco",
  state: "CA",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/SanFrancisco.jpg",
)
Region.create!(
  city: "New York",
  state: "New York",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/NewYork.jpg",
)

Region.create!(
  city: "Chicago",
  state: "Illinois",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Chicago.jpg",
)
Listing.create!(
  host_id: 1,
  title: "Airy home, lots of light",
  longitude: -122.434960,
  latitude: 37.775769,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/Flying_Home.jpg",
  description: "Catch excellent views of the city",
  region_id: 1,
  max_guests: 10,
  property_type: "Aircraft",
  house_rules: "Hands and legs inside the vehicle at all times",
)

Listing.create!(
  host_id: 1,
  title: "Granok Bar",
  longitude: -122.413820,
  latitude: 37.779760,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-granok-bar.jpg",
  description: "We're on top of a bar, don't let it go to your head",
  region_id: 1,
  max_guests: 10,
  property_type: "Couch",
  house_rules: "Responsible drinking encouraged",
)

Listing.create!(
  host_id: 1,
  title: "Homey, home",
  longitude: -122.511281,
  latitude: 37.769996,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-human-house.jpg",
  description: "Warm fireplace",
  region_id: 1,
  max_guests: 10,
  property_type: "Apartment",
  house_rules: "No smoking",
)
