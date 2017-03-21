# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create!(
  username: 'Guest',
  name: "Guest Surfer",
  password: "password",
  image_url: "https://s3.amazonaws.com/surf-dev/Users/User1.png",
  about_me: "I'm just visiting from the future. Looking for friendly hosts, but am not picky. I love flying my home and taking care of my RoboDog"
)



san_francisco = Region.create!(
  city: "San Francisco",
  state: "CA",
  latitude: 37.775769,
  longitude: -122.434960,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/SanFrancisco.jpg",
)
new_york = Region.create!(
  city: "New York",
  state: "New York",
  latitude: 40.7128,
  longitude: -74.0059,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/NewYork.jpg",
)

chicago = Region.create!(
  city: "Chicago",
  state: "Illinois",
  latitude: 41.8781,
  longitude: -87.6298,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Chicago.jpg",
)

washington = Region.create!(
  city: "Seattle",
  state: "WA",
  latitude: 47.6205,
  longitude: -122.3509,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Paris.jpg"
)

boston = Region.create!(
  city: "Boston",
  state: "MA",
  latitude: 42.3601,
  longitude: -71.0589,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Tokyo.jpg"
)

philadelphia = Region.create!(
  city: "Philadelphia",
  state: "Pennsylvania",
  latitude: 40.0094,
  longitude: -75.1333,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/London.jpg"
)

flying_home = Listing.create!(
  host_id: guest.id,
  title: "Airy home, lots of light",
  latitude: 37.782310,
  longitude: -122.398278,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/Flying_Home.jpg",
  description: "Catch excellent views of the city",
  region_id: san_francisco.id,
  max_guests: 10,
  property_type: "Aircraft",
  house_rules: "Hands and legs inside the vehicle at all times",
)

Listing.create!(
host_id: guest.id,
title: "Spacious couch",
latitude: 37.793054,
longitude: -122.402632,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/couch.jpg",
description: "Ignore the patches, great couch",
region_id: san_francisco.id,
max_guests: 3,
property_type: "Couch",
house_rules: "No smoking",
)

Listing.create!(
host_id: guest.id,
title: "Comfy Bed",
latitude: 37.776480,
longitude: -122.423271,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-granok-bed.jpg",
description: "Sleep in style",
region_id: san_francisco.id,
max_guests: 3,
property_type: "Bed",
house_rules: "No smoking",
)

Listing.create!(
  host_id: guest.id,
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
  host_id: guest.id,
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
  host_id: guest.id,
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
  host_id: guest.id,
  title: "Homey, home",
  latitude: 41.8741,
  longitude: -87.6278,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-human-house.jpg",
  description: "Warm fireplace",
  region_id: chicago.id,
  max_guests: 10,
  property_type: "Apartment",
  house_rules: "No smoking",
)

Listing.create!(
  host_id: guest.id,
  title: "Sleep on my floor",
  latitude: 42.3611,
  longitude: -71.0579,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/todds-whiskey.jpg",
  description: "Sorry, meager accomodations, but right around the corner from Todd's Whiskey",
  region_id: boston.id,
  max_guests: 1,
  property_type: "Floor",
  house_rules: "No smoking",
)

Review.create!(
  listing_id: flying_home.id,
  author_id: guest.id,
  rating: 4,
  title: "This host soars to the top",
  body: "Our stay was perfect."
)
Booking.create!([
  {listing_id: 1, user_id: 1, check_in_date: "2017-03-08", check_out_date: "2017-03-24"}
])
# Listing.create!([
#   {host_id: 1, title: "Airy home, lots of light", longitude: -122.398278, latitude: 37.78231, image_url: "https://s3.amazonaws.com/surf-dev/Listings/Flying_Home.jpg", description: "Catch excellent views of the city", region_id: 1, max_guests: 10, property_type: "Aircraft", house_rules: "Hands and legs inside the vehicle at all times"},
#   {host_id: 1, title: "Spacious couch", longitude: -122.402632, latitude: 37.793054, image_url: "https://s3.amazonaws.com/surf-dev/Listings/couch.jpg", description: "Ignore the patches, great couch", region_id: 1, max_guests: 3, property_type: "Couch", house_rules: "No smoking"},
#   {host_id: 1, title: "Comfy Bed", longitude: -122.423271, latitude: 37.77648, image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-granok-bed.jpg", description: "Sleep in style", region_id: 1, max_guests: 3, property_type: "Bed", house_rules: "No smoking"},
#   {host_id: 1, title: "Granok Bar", longitude: -74.0059, latitude: 40.7128, image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-granok-bar.jpg", description: "We're on top of a bar, don't let it go to your head", region_id: 2, max_guests: 10, property_type: "Couch", house_rules: "Responsible drinking encouraged"},
#   {host_id: 1, title: "Spacious Castle", longitude: -75.0059, latitude: 40.6128, image_url: "https://s3.amazonaws.com/surf-dev/Listings/castle.jpg", description: "Cold at night", region_id: 2, max_guests: 20, property_type: "Castle", house_rules: "Don't go into the dungeon"},
#   {host_id: 1, title: "Comfy spot in the bustling city", longitude: -73.0059, latitude: 39.7128, image_url: "https://s3.amazonaws.com/surf-dev/Listings/antique-shop.jpg", description: "We're located above Stella's antiques", region_id: 2, max_guests: 1, property_type: "Couch", house_rules: "Quiet during business hours"},
#   {host_id: 1, title: "Homey, home", longitude: -87.6278, latitude: 41.8741, image_url: "https://s3.amazonaws.com/surf-dev/Listings/ws-human-house.jpg", description: "Warm fireplace", region_id: 3, max_guests: 10, property_type: "Apartment", house_rules: "No smoking"},
#   {host_id: 1, title: "Sleep on my floor", longitude: -71.0579, latitude: 42.3611, image_url: "https://s3.amazonaws.com/surf-dev/Listings/todds-whiskey.jpg", description: "Sorry, meager accomodations, but right around the corner from Todd's Whiskey", region_id: 5, max_guests: 1, property_type: "Floor", house_rules: "No smoking"}
# ])
# Region.create!([
#   {city: "San Francisco", state: "CA", image_url: "https://s3.amazonaws.com/surf-dev/Regions/SanFrancisco.jpg", latitude: 37.775769, longitude: -122.43496},
#   {city: "New York", state: "New York", image_url: "https://s3.amazonaws.com/surf-dev/Regions/NewYork.jpg", latitude: 40.7128, longitude: -74.0059},
#   {city: "Chicago", state: "Illinois", image_url: "https://s3.amazonaws.com/surf-dev/Regions/Chicago.jpg", latitude: 41.8781, longitude: -87.6298},
#   {city: "Seattle", state: "WA", image_url: "https://s3.amazonaws.com/surf-dev/Regions/Paris.jpg", latitude: 47.6205, longitude: -122.3509},
#   {city: "Boston", state: "MA", image_url: "https://s3.amazonaws.com/surf-dev/Regions/Tokyo.jpg", latitude: 42.3601, longitude: -71.0589},
#   {city: "Philadelphia", state: "Pennsylvania", image_url: "https://s3.amazonaws.com/surf-dev/Regions/London.jpg", latitude: 40.0094, longitude: -75.1333}
# ])
Review.create!([
  {listing_id: 1, author_id: 1, rating: 4, title: "This host soars to the top", body: "Our stay was perfect."},
  {listing_id: 1, author_id: 1, rating: 2, title: "Test", body: "Test"},
  {listing_id: 1, author_id: 1, rating: 4, title: "Stupendous", body: "This was the most amazing thing I've ever done!"},
  {listing_id: 1, author_id: 1, rating: 3, title: "Was pretty fun", body: "Got a little airsick though "},
  {listing_id: 3, author_id: 1, rating: 3, title: "Meager", body: "But the hosts is great! The bed is worst for wear but still comfy."},
  {listing_id: 1, author_id: 1, rating: 3, title: "Okay.", body: "It was okay."},
  {listing_id: 1, author_id: 1, rating: 3, title: "Loud", body: "Nice stay but the propeller was really loud."},
  {listing_id: 1, author_id: 1, rating: 3, title: "Test", body: "Testing"}
])
# User.create!([
#   {username: "Guest", name: "Guest Surfer", password_digest: "$2a$10$e7nink9fkNqJMDCq1GupXeTrtCrkPN7NvF2DyzeJa7SqYdodgL.C.", session_token: "M7c1rZgO7MsZ3pxMLrBhhA==", about_me: nil, image_url: "https://s3.amazonaws.com/surf-dev/Users/User1.png", region_id: nil, image_file_name: nil, image_content_type: nil, image_file_size: nil, image_updated_at: nil}
# ])
