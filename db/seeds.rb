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

san_francisco = Region.create!(
  city: "San Francisco",
  state: "CA",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/SanFrancisco.jpg",
)
new_york = Region.create!(
  city: "New York",
  state: "New York",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/NewYork.jpg",
)

chicago = Region.create!(
  city: "Chicago",
  state: "Illinois",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Chicago.jpg",
)

washington = Region.create!(
  city: "Seattle",
  state: "WA",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Paris.jpg"
)

boston = Region.create!(
  city: "Boston",
  state: "MA",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Tokyo.jpg"
)

london = Region.create!(
  city: "London",
  state: "England",
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/London.jpg"
)

Listing.create!(
  host_id: 1,
  title: "Airy home, lots of light",
  latitude: 37.775769,
  longitude: -122.434960,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/Flying_Home.jpg",
  description: "Catch excellent views of the city",
  region_id: san_francisco.id,
  max_guests: 10,
  property_type: "Aircraft",
  house_rules: "Hands and legs inside the vehicle at all times",
)

Listing.create!(
host_id: 1,
title: "Spacious couch",
latitude: 36.769996,
longitude: -120.511281,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/couch.jpg",
description: "Ignore the patches, great couch",
region_id: san_francisco.id,
max_guests: 3,
property_type: "Couch",
house_rules: "No smoking",
)

Listing.create!(
host_id: 1,
title: "Comfy Bed",
latitude: 35.769996,
longitude: -121.511281,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-granok-bed.jpg",
description: "Sleep in style",
region_id: san_francisco.id,
max_guests: 3,
property_type: "Bed",
house_rules: "No smoking",
)

Listing.create!(
  host_id: 1,
  title: "Granok Bar",
  latitude: 40.7128,
  longitude: -74.0059,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-granok-bar.jpg",
  description: "We're on top of a bar, don't let it go to your head",
  region_id: new_york.id,
  max_guests: 10,
  property_type: "Couch",
  house_rules: "Responsible drinking encouraged",
)
Listing.create!(
  host_id: 1,
  title: "Spacious Castle",
  latitude: 40.6128,
  longitude: -75.0059,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/castle.jpg",
  description: "Cold at night",
  region_id: new_york.id,
  max_guests: 20,
  property_type: "Castle",
  house_rules: "Don't go into the dungeon",
)
Listing.create!(
  host_id: 1,
  title: "Comfy spot in the bustling city",
  latitude: 39.7128,
  longitude: -73.0059,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/antique-shop.jpg",
  description: "We're located above Stella's antiques",
  region_id: new_york.id,
  max_guests: 1,
  property_type: "Couch",
  house_rules: "Quiet during business hours",
)

Listing.create!(
  host_id: 1,
  title: "Homey, home",
  latitude: 41.8781,
  longitude: -87.6298,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-human-house.jpg",
  description: "Warm fireplace",
  region_id: chicago.id,
  max_guests: 10,
  property_type: "Apartment",
  house_rules: "No smoking",
)

Listing.create!(
  host_id: 1,
  title: "Sleep on my floor",
  latitude: 42.3601,
  longitude: -71.0589,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/todds-whiskey.jpg",
  description: "Sorry, meager accomodations, but right around the corner from Todd's Whiskey",
  region_id: boston.id,
  max_guests: 1,
  property_type: "Floor",
  house_rules: "No smoking",
)
