# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest1 = User.create!(
  username: 'Guest',
  name: "Guest Surfer",
  password: "password",
  image_url: "https://s3.amazonaws.com/surf-dev/Users/User1.png",
  about_me: "I'm just visiting from the future. Looking for friendly hosts, but am not picky. I love flying my home and taking care of my RoboDog"
)

guest2 = User.create!(
username: 'Guest2',
name: "War Lord",
password: "password",
image_url: "https://s3.amazonaws.com/surf-dev/Users/User2.jpg",
about_me: "I love to dress up! No one has ever seen my real face. I like to collect swords, shields, and discarded circuit boards."
)

guest3 = User.create!(
username: 'Guest3',
name: "R2D2",
password: "password",
image_url: "https://s3.amazonaws.com/surf-dev/Users/user_goggle_reflection.jpg",
about_me: "I fly my moving castle around the world. I love to travel, and meet new people. I love to hear where everyone was watching the earth's final sun set and exchange stories from the other side."
)

guest4 = User.create!(
username: 'Guest4',
name: "Pipe Master",
password: "password",
image_url: "https://s3.amazonaws.com/surf-dev/Users/user_pipe.jpg",
about_me: "I'm an avid collector of pipes from the past. I'm especially interested in 21st century smoking devices. If anyone has any vintage vapes, I'm always interested to see them!"
)

guest5 = User.create!(
username: 'Guest5',
name: "Mad Hatter",
password: "password",
image_url: "https://s3.amazonaws.com/surf-dev/Users/user_tophat.jpg",
about_me: "Welcome to my home. I'm pretty busy with my daily activities, but will provide anything you need."
)

guest6 = User.create!(
username: 'Guest6',
name: "Twinkle",
password: "password",
image_url: "https://s3.amazonaws.com/surf-dev/Users/user_twinkle_lights.jpg",
about_me: "Hi! I'm an artist and use my home as a gallery/studio. I've been documenting the effect of the apocolypse on art and different cultures. I love to share my work or paint with guests."
)

guest7 = User.create!(
username: 'Guest7',
name: "Tinker",
password: "password",
image_url: "https://s3.amazonaws.com/surf-dev/Users/watch_maker.jpg",
about_me: "I guarentee a good TIME when you stay with me"
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
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/London.jpg"
)

philadelphia = Region.create!(
  city: "Philadelphia",
  state: "Pennsylvania",
  latitude: 40.0094,
  longitude: -75.1333,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Tokyo.jpg"
)

# LISTINGS


flying_home = Listing.create!(
  host_id: guest1.id,
  title: "Airy, Lots of Light",
  latitude: 37.782310,
  longitude: -122.398278,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/Flying_Home.jpg",
  description: "Catch excellent views of the city from our flying home. We usually dock somewhere for lunch and sometimes overnight if there are interesting things happening back on the ground",
  region_id: san_francisco.id,
  max_guests: 10,
  property_type: "Aircraft",
  house_rules: "Hands and legs inside the vehicle at all times",
)

listing_2 = Listing.create!(
host_id: guest2.id,
title: "Airtight Home in the Bay Area",
latitude: 37.793054,
longitude: -122.402632,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/scuba.jpg",
description: "We're located where the Bay Bridge used to be. My roommate and I usually like to cruise around and find any old-world relics left over in the oceans. While small, this is great for someone who isn't looking for anything too fancy",
region_id: san_francisco.id,
max_guests: 2,
property_type: "Sub",
house_rules: "Please discard all waste appropriately through the disposal chute. Unfortunately can not accept children. Bring a sleeping bag!",
)

listing_3  = Listing.create!(
host_id: guest3.id,
title: "Watchtower in SOMA",
latitude: 37.776480,
longitude: -122.423271,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/Firewatch-Mod-Night-Final_feature.jpg",
description: "Stay with us and help us protect what's left of the city from natural fires and robotic bees. We usually take shifts through the night, but you are welcom to the cot here whenever you need. We ask that anyone who stays volunteers for a shift with us. Together we can save the human race!",
region_id: san_francisco.id,
max_guests: 1,
property_type: "Tower",
house_rules: "No smoking, it's a fire hazard! No AI companions of any kind!",
)

listing_4 = Listing.create!(
  host_id: guest4.id,
  title: "Cozy Home in the Heart of the City",
  latitude: 37.791091,
  longitude: -122.415152,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/Kitchen.png",
  description: "We have a small home in the middle of the city that was love. We have a fully stocked kitchen with all you need to cook dinner or make tea. We usually like to make breakfast for our guests. Walking distance from anywhere you'd like to go.",
  region_id: san_francisco.id,
  max_guests: 4,
  property_type: "House",
  house_rules: "Please feel free to make yourselves at home. The Gas protection masks are in the basement, which doubles as a fallout shelter.",
)
listing_5 = Listing.create!(
  host_id: guest5.id,
  title: "Spacious Castle",
  latitude: 40.728903,
  longitude: -74.004183,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/castle.jpg",
  description: "Come stay at our fortress in the West Village. Built in 2201 to fend off the 3rd Wave Invaders, this home is full of history and antique pieces. Perfect for large groups. Cold at night",
  region_id: new_york.id,
  max_guests: 20,
  property_type: "Castle",
  house_rules: "Don't go into the dungeon",
)
listing_6 = Listing.create!(
  host_id: guest6.id,
  title: "Comfy spot in the bustling city",
  latitude: 40.741852,
  longitude: -73.995835,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/antique-shop.jpg",
  description: "We're located above Stella's antiques. This is a nice spot for anyone trying to stay central to all the attractions. We love to meet travelers and hear about adventures through time and space. Great cafes around, many specializing in vintage drinks such as matcha and chai lattes.",
  region_id: new_york.id,
  max_guests: 2,
  property_type: "Apartment",
  house_rules: "Quiet during business hours",
)

listing_7 = Listing.create!(
  host_id: guest7.id,
  title: "East Village Walk Up",
  latitude: 40.732887,
  longitude: -73.994490,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/NightShot.png",
  description: "We have a couch you can crash one. Perfect for anyone trying to see where the old Webster Hall was and the surrounding area. ",
  region_id: new_york.id,
  max_guests: 2,
  property_type: "Couch",
  house_rules: "No smoking. Be respectful, we all know what that means",
)

listing_8 = Listing.create!(
  host_id: guest1.id,
  title: "Sleep on my Floor",
  latitude: 42.371463,
  longitude: -71.089431,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/todds-whiskey.jpg",
  description: "Sorry, super meager accomodations, but right around the corner from Todd's Whiskey",
  region_id: boston.id,
  max_guests: 1,
  property_type: "Floor",
  house_rules: "Have fun but excessive drinking is not allowed. Treat this as your own home!",
)

Review.create!(
  listing_id: flying_home.id,
  author_id: guest2.id,
  rating: 4,
  title: "This host soars to the top",
  body: "Our stay was perfect."
)

Review.create!(
  listing_id: listing_2.id,
  author_id: guest3.id,
  rating: 4,
  title: "Wonderful!",
  body: "Loved it."
)

Review.create!(
  listing_id: listing_3.id,
  author_id: guest4.id,
  rating: 1,
  title: "Terrible",
  body: "Host didn't respond to any calls day of. Had to rent a hotel"
)

Review.create!(
  listing_id: listing_4.id,
  author_id: guest5.id,
  rating: 3,
  title: "Okay",
  body: "Good for the price."
)

Review.create!(
  listing_id: listing_5.id,
  author_id: guest6.id,
  rating: 5,
  title: "Amazing",
  body: "Location and hosts were amazing."
)

Review.create!(
  listing_id: listing_6.id,
  author_id: guest7.id,
  rating: 1,
  title: "Learn from our mistake!",
  body: "Turn around do not book here!"
)

Review.create!(
  listing_id: listing_7.id,
  author_id: guest1.id,
  rating: 4,
  title: "Average",
  body: "Exactly as dipicted in the pictures. Got the job done"
)

Review.create!(
  listing_id: listing_8.id,
  author_id: guest1.id,
  rating: 4,
  title: "This host was friendly, intelligent, and well-traveled. It was fun to exchange stories!",
  body: "Our stay was perfect."
)

Booking.create!([
  {listing_id: flying_home.id, user_id: guest7.id, check_in_date: "2017-03-08", check_out_date: "2017-03-24"}
])

Booking.create!([
  {listing_id: listing_2.id, user_id: guest6.id, check_in_date: "2017-04-08", check_out_date: "2017-04-24"}
])

Booking.create!([
  {listing_id: listing_3.id, user_id: guest5.id, check_in_date: "2017-05-08", check_out_date: "2017-05-24"}
])

Booking.create!([
  {listing_id: listing_4.id, user_id: guest4.id, check_in_date: "2017-04-08", check_out_date: "2017-05-24"}
])

Booking.create!([
  {listing_id: listing_5.id, user_id: guest3.id, check_in_date: "2017-06-08", check_out_date: "2017-06-24"}
])

Booking.create!([
  {listing_id: listing_6.id, user_id: guest2.id, check_in_date: "2017-07-08", check_out_date: "2017-07-24"}
])
Booking.create!([
  {listing_id: listing_7.id, user_id: guest1.id, check_in_date: "2017-08-08", check_out_date: "2017-08-24"}
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
