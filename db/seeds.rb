# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

RATING = [1, 2, 3, 4, 5]

REVIEWS = [
  "Lovely stay! The host was friendly and on time for our arrival. Location is central to all the sights. Host cooked us breakfast on our last day and sent us on our way. We highly recommend this place!",
  "Our host was friendly and accomodating. The space looked just like the pictures. About 5 minutes from the nearest hovertrain station",
  "Our hosts were helpful. However, the were late in picking us up from the port. The space was a little smaller than advertised. Enjoyed our stay, but the listing could have been clearer",
  "This was our worst experience on SurfDystopia! The space was clearly not cleaned recently. There were roboroaches everywhere! We had to take a cab to all the sights. Wouldn't recommend staying here for other surfers",
  "This was our first stay on SurfDystopia, and it was super fun. Our hosts had traveled across the universe and back. We shared stories of our travels and thoughts of our post-apocalyptic times. Will definitely visit again",
  "We stayed with our host for a week and it was fantastic. We had everything we needed. Fully stocked kitchen and fridge stocked with NukaCola",
  "Their basement fallout shelter really muted the noise of the nuclear asteroid shower peppering the town outside!  I was super impressed!",
  "Surfers beware, this was a real rough stay. There were RN08Bots roaming the streets outside the space and someone in our party had to pull out her stungun. Turn around! Learn from our mistake.",
  "Our host was really interesting and had a unique space and art displayed. Our host showed us around to the museums and historical spots from the 21st century"
]

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


GUESTS = [guest1, guest2, guest3, guest4, guest5, guest6, guest7]

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

seattle = Region.create!(
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
  state: "PA",
  latitude: 40.0094,
  longitude: -75.1333,
  image_url: "https://s3.amazonaws.com/surf-dev/Regions/Tokyo.jpg"
)

# LISTINGS


listing_1 = Listing.create!(
  host_id: guest1.id,
  title: "Airy, home with lots of Light",
  latitude: 37.782310,
  longitude: -122.398278,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/water/propelling.jpg",
  description: "Catch excellent views of the city from our flying home. We usually dock somewhere for lunch and sometimes overnight if there are interesting things happening back on the ground",
  region_id: san_francisco.id,
  max_guests: rand(1..6),
  property_type: "Air-Home",
  house_rules: "Hands and legs inside the vehicle at all times",
)

listing_2 = Listing.create!(
host_id: guest2.id,
title: "Airtight Home in the Bay Area",
latitude: 37.793054,
longitude: -122.402632,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/water/scuba.jpg",
description: "We're located where the Bay Bridge used to be. My roommate and I usually like to cruise around and find any old-world relics left over in the oceans. While small, this is great for someone who isn't looking for anything too fancy",
region_id: san_francisco.id,
max_guests: rand(1..6),
property_type: "Sub",
house_rules: "Please discard all waste appropriately through the disposal chute. Unfortunately can not accept children. Bring a sleeping bag!",
)

listing_3  = Listing.create!(
host_id: guest3.id,
title: "Comfortable spot near city center",
latitude: 37.776480,
longitude: -122.423271,
image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/water/LivingRoomCouch.png",
description: "We have a humble home in the heart of SF. Walk to the Golden Gate Park to hologram what they bridge and view used to look like! It was quite the sight back in the day",
region_id: san_francisco.id,
max_guests: rand(1..6),
property_type: "House",
house_rules: "No smoking, it's a fire hazard! No AI companions of any kind!",
)

listing_4 = Listing.create!(
  host_id: guest4.id,
  title: "Cozy Home in the Heart of the City",
  latitude: 37.791091,
  longitude: -122.415152,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/water/Kitchen.png",
  description: "We have a small home in the middle of the city that was love. We have a fully stocked kitchen with all you need to cook dinner or make tea. We usually like to make breakfast for our guests. Walking distance from anywhere you'd like to go.",
  region_id: san_francisco.id,
  max_guests: rand(1..6),
  property_type: "House",
  house_rules: "Please feel free to make yourselves at home. The Gas protection masks are in the basement, which doubles as a fallout shelter.",
)
listing_5 = Listing.create!(
  host_id: guest5.id,
  title: "Sub in the Bay ",
  latitude: 37.786623,
  longitude: -122.425133,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/water/underwater.jpg",
  description: "Come stay at our air tight spot in the Bay. Avoid the arid heat and terrestrial buggers and escape to our home!",
  region_id: san_francisco.id,
  max_guests: rand(1..6),
  property_type: "Sub",
  house_rules: "Don't forget your airmasks",
)

listing_6 = Listing.create!(
  host_id: guest6.id,
  title: "Your Next Home",
  latitude: 40.728903,
  longitude: -74.004183,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Gothic/castle.jpg",
  description: "Come stay at our fortress in the West Village. Built in 2201 to fend off the 3rd Wave Invaders, this home is full of history and antique pieces. Perfect for large groups. Cold at night",
  region_id: new_york.id,
  max_guests: rand(1..6),
  property_type: "Castle",
  house_rules: "Don't go into the dungeon",
)
listing_7 = Listing.create!(
  host_id: guest7.id,
  title: "Comfy spot in the bustling city",
  latitude: 40.741852,
  longitude: -73.995835,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Gothic/city_overlook.jpg",
  description: "We're located above Stella's antiques. This is a nice spot for anyone trying to stay central to all the attractions. We love to meet travelers and hear about adventures through time and space. Great cafes around, many specializing in vintage drinks such as matcha and chai lattes.",
  region_id: new_york.id,
  max_guests: rand(1..6),
  property_type: "Apartment",
  house_rules: "Quiet during business hours",
)

listing_8 = Listing.create!(
  host_id: guest1.id,
  title: "East Village Walk Up",
  latitude: 40.732887,
  longitude: -73.994490,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Gothic/flying_home_8.jpg",
  description: "We have a couch you can crash on. Perfect for anyone trying to see where the old Webster Hall was and the surrounding area.",
  region_id: new_york.id,
  max_guests: rand(1..6),
  property_type: "Couch",
  house_rules: "No smoking. Be respectful, we all know what that means",
)

listing_9 = Listing.create!(
  host_id: guest2.id,
  title: "Central Location by Times Square",
  latitude: 40.715851,
  longitude: -74.012727,
  image_url: "	https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Gothic/prague_old_city.jpg",
  description: "Hey, our apartment has an extra room that we're hosting people in. Exposed Brick. Chrome fixtures. Minimal damage from the last sunspot explosion.",
  region_id: new_york.id,
  max_guests: rand(1..6),
  property_type: "Couch",
  house_rules: "No AI companions, and bring your sunbeamer. You'll need it",
)

listing_10 = Listing.create!(
  host_id: guest3.id,
  title: "Small Spot by Todd's Whiskey",
  latitude: 40.754613,
  longitude: -73.969811,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Gothic/todds-whiskey.jpg",
  description: "We don't have much space, but there is some space to set up your thermal pack and mattress",
  region_id: new_york.id,
  max_guests: rand(1..6),
  property_type: "Floor",
  house_rules: "No smoking. Sorry no pets! (AI, Robotic, or otherwise!)",
)

listing_11 = Listing.create!(
  host_id: guest4.id,
  title: "Watchtower in the Magnificent Mile",
  latitude: 41.759802,
  longitude: -87.615289,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Firewatch/Firewatch-Mod-Night-Final_feature.jpg",
  description: "Stay with us and help us protect what's left of the city from natural fires and robotic bees. We usually take shifts through the night, but you are welcome to the cot here whenever you need",
  region_id: chicago.id,
  max_guests: rand(1..6),
  property_type: "Couch",
  house_rules: "We ask that anyone who stays volunteers for a shift with us. Together we can save the human race!",
)

listing_12 = Listing.create!(
  host_id: guest5.id,
  title: "Campsite by Lake Michigan",
  latitude: 41.794241,
  longitude: -87.642212,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Firewatch/blue_alpine.jpg",
  description: "We have a couple plots by the Lake. Really serene after the 3045 event. Come see the wildlife and extraterrestrial terrain",
  region_id: chicago.id,
  max_guests: rand(1..6),
  property_type: "Campsite",
  house_rules: "Stay close to the site. There have been reports of alien and cyborg attacks",
)

listing_13 = Listing.create!(
  host_id: guest6.id,
  title: "House in the Hills",
  latitude: 40.728903,
  longitude: -74.004183,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Firewatch/firewatch7.jpg",
  description: "We're located in the mountains created from the 2018 space invasion. The views are beautiful, and you can see city ruins from the room",
  region_id: chicago.id,
  max_guests: rand(1..6),
  property_type: "House",
  house_rules: "Must be able to climb to home. Bring UV shields",
)
listing_14 = Listing.create!(
  host_id: guest7.id,
  title: "Yurt in Lincoln Park",
  latitude: 41.911876,
  longitude: -87.651138,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Firewatch/firewatch_forest.png",
  description: "Stay in luxury. We have a yurt set up with a intergalactic wireless connection, hoverboard, hyperport, and full kitchen",
  region_id: chicago.id,
  max_guests: rand(1..6),
  property_type: "Yurt",
  house_rules: "Clean up after use please",
)

listing_15 = Listing.create!(
  host_id: guest1.id,
  title: "Lakeside Cabin",
  latitude: 41.823926,
  longitude: -87.664185,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/Firewatch/firewatch_lake.jpg",
  description: "Full cabin for use. Had a couple bedrooms, kitchen, patio with views of old Chicago ruins",
  region_id: chicago.id,
  max_guests: 10,
  property_type: "Couch",
  house_rules: "No smoking. Be respectful. No pets, AI companions, or stun-devices",
)

listing_16 = Listing.create!(
  host_id: guest2.id,
  title: "Blimp Home",
  latitude: 47.619391,
  longitude: -122.316343,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/FlyingHouses/flying_home_1.jpg",
  description: "Just because Seattle is uninhabitable doesn't mean you can't visit! Cruise from above and catch views of the old City",
  region_id: seattle.id,
  max_guests: rand(1..6),
  property_type: "Air-Home",
  house_rules: "No flammable materials allowed on board.",
)

listing_17 = Listing.create!(
  host_id: guest3.id,
  title: "Home in the sky",
  latitude: 47.601048,
  longitude: -122.328188,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/FlyingHouses/flying_home_10.jpg",
  description: "Perfect for catching views of old city from above",
  region_id: seattle.id,
  max_guests: rand(1..6),
  property_type: "Air-Home",
  house_rules: "No smoking. Hands and legs inside the vehicle at all times",
)

listing_18 = Listing.create!(
  host_id: guest4.id,
  title: "Flying Home",
  latitude: 47.602437,
  longitude: -122.331792,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/FlyingHouses/flying_home_9.jpg",
  description: "Just because Seattle is uninhabitable doesn't mean you can't visit! Cruise from above and catch views of the old City",
  region_id: seattle.id,
  max_guests: rand(1..6),
  property_type: "Air-Home",
  house_rules: "No smoking. Hands and legs inside the vehicle at all times",
)

listing_19 = Listing.create!(
  host_id: guest5.id,
  title: "Spacious Air ship",
  latitude: 47.608083,
  longitude: -122.327329,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/FlyingHouses/grass_walkway.jpg",
  description: "Perfect for catching views of old city from above",
  region_id: seattle.id,
  max_guests: rand(1..6),
  property_type: "Air-Home",
  house_rules: "No smoking. Hands and legs inside the vehicle at all times",
)

listing_20 = Listing.create!(
  host_id: guest6.id,
  title: "Greenhouse in the sky",
  latitude: 47.611518,
  longitude: -122.344451,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/FlyingHouses/rainforest.jpg",
  description: "Just because Seattle is uninhabitable doesn't mean you can't visit! Cruise from above and catch views of the old City",
  region_id: seattle.id,
  max_guests: rand(1..6),
  property_type: "Air-Home",
  house_rules: "No smoking. Hands and legs inside the vehicle at all times",
)

listing_21 = Listing.create!(
  host_id: guest7.id,
  title: "Converted Loft",
  latitude: 42.364547,
  longitude: -71.064781,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/metropolis/Warehouse.png",
  description: "Homey spot in an old battery factory. Pre-Energy-Revolution architechture",
  region_id: boston.id,
  max_guests: rand(1..6),
  property_type: "Apartment",
  house_rules: "Quiet during business hours",
)

listing_22 = Listing.create!(
  host_id: guest4.id,
  title: "Jamaica Plains Walk Up",
  latitude: 42.351770,
  longitude: -71.071901,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/metropolis/eiffel_tower.jpg",
  description: "We have a couch you can crash one. Perfect for anyone trying to see where the old Prudential Center was",
  region_id: boston.id,
  max_guests: rand(1..6),
  property_type: "Couch",
  house_rules: "Quiet during business hours",
)

listing_23 = Listing.create!(
  host_id: guest5.id,
  title: "Jamaica Plains Walk Up",
  latitude: 37.786623,
  longitude: -122.425133,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/metropolis/flying_home_2.jpg",
  description: "We have a couch you can crash one. Perfect for anyone trying to see where the old Prudential Center was",
  region_id: boston.id,
  max_guests: rand(1..6),
  property_type: "Apartment",
  house_rules: "Quiet during business hours",
)

listing_24 = Listing.create!(
  host_id: guest6.id,
  title: "Converted Loft",
  latitude: 42.361790,
  longitude: -71.058621,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/metropolis/library.jpg",
  description: "Homey spot in an old battery factory. Pre-Energy-Revolution architechture",
  region_id: boston.id,
  max_guests: rand(1..6),
  property_type: "Apartment",
  house_rules: "Quiet during business hours",
)

listing_25 = Listing.create!(
  host_id: guest7.id,
  title: "Comfy spot in the bustling city",
  latitude: 42.343239,
  longitude: -71.085311,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/metropolis/antique-shop.jpg",
  description: "We're located above Stella's antiques. This is a nice spot for anyone trying to stay central to all the attractions. We love to meet travelers and hear about adventures through time and space. Great cafes around, many specializing in vintage drinks such as matcha and chai lattes.",
  region_id: boston.id,
  max_guests: rand(1..6),
  property_type: "Apartment",
  house_rules: "Quiet during business hours",
)

listing_26 = Listing.create!(
  host_id: guest2.id,
  title: "Sleep on my Floor",
  latitude: 39.976260,
  longitude: -75.129026,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/yellow/cliffs_case.jpg",
  description: "Sorry, super meager accomodations, but central to anywhere you'd want to warpspeed to",
  region_id: philadelphia.id,
  max_guests: rand(1..6),
  property_type: "Floor",
  house_rules: "No AI companions or roboguests. Treat this as your own home!",
)

listing_27 = Listing.create!(
  host_id: guest3.id,
  title: "Sleep on my Floor",
  latitude: 39.987309,
  longitude: -75.142073,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/yellow/flying_home_6.jpg",
  description: "Minutes away from the teleportation hub. Walking distance from anywhere you'd like to see",
  region_id: philadelphia.id,
  max_guests: rand(1..6),
  property_type: "Floor",
  house_rules: "Have fun but excessive drinking is not allowed. Treat this as your own home!",
)

listing_28 = Listing.create!(
  host_id: guest4.id,
  title: "Comfy home in the heart of the city",
  latitude: 39.977313,
  longitude: -75.129026,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/yellow/planet_room.jpg",
  description: "Sorry, super meager accomodations, but central to anywhere you'd want to warpspeed to",
  region_id: philadelphia.id,
  max_guests: rand(1..6),
  property_type: "Floor",
  house_rules: "No AI companions or roboguests. Treat this as your own home!",
)
listing_29 = Listing.create!(
  host_id: guest5.id,
  title: "Apartment in the City",
  latitude: 39.968353,
  longitude: -75.224894,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/yellow/stairwell.jpg",
  description: "Minutes away from the teleportation hub. Walking distance from anywhere you'd like to see",
  region_id: philadelphia.id,
  max_guests: rand(1..6),
  property_type: "Floor",
  house_rules: "Have fun but excessive drinking is not allowed. Treat this as your own home!",
)

listing_30 = Listing.create!(
  host_id: guest6.id,
  title: "Train Station Abode",
  latitude: 40.005909,
  longitude: -75.101756,
  image_url: "https://s3.amazonaws.com/surf-dev/Listings/ListingFolders/yellow/train_station.jpg",
  description: "Come stay at a renovated train station",
  region_id: philadelphia.id,
  max_guests: rand(1..6),
  property_type: "Floor",
  house_rules: "No AI companions or roboguests. Treat this as your own home!",
)

LISTINGS = [listing_1, listing_2, listing_3, listing_4, listing_5, listing_6, listing_7, listing_8, listing_9, listing_10, listing_11, listing_12, listing_13, listing_14, listing_15, listing_16, listing_17, listing_18, listing_19, listing_20, listing_21, listing_22, listing_23, listing_24, listing_25, listing_26, listing_27, listing_28, listing_29, listing_30]

TITLES = ["Great", "Okay Stay", "Lovely Hosts", "Had a great Stay", "Was Perfect For What We Needed"]

100.times do
  Review.create!(
    listing_id: LISTINGS.sample.id,
    author_id: GUESTS.sample.id,
    rating: rand(1..5),
    title: TITLES.sample,
    body: REVIEWS.sample
  )
end


Review.create!(
  listing_id: listing_7.id,
  author_id: guest1.id,
  rating: rand(1..5),
  title: "This host soars to the top",
  body: REVIEWS.sample
)

Review.create!(
  listing_id: listing_1.id,
  author_id: guest2.id,
  rating: 4,
  title: "This host soars to the top",
  body: REVIEWS.shuffle[0]
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
  rating: 3,
  title: "Average",
  body: "Exactly as dipicted in the pictures. Got the job done"
)

Review.create!(
  listing_id: listing_8.id,
  author_id: guest1.id,
  rating: 2,
  title: "This host was friendly, intelligent, and well-traveled. It was fun to exchange stories!",
  body: "Our stay was perfect."
)

Review.create!(
  listing_id: listing_1.id,
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

CHECK_INS = ["2017-03-08", "2017-04-08", "2017-01-08", "2017-02-08", "2017-05-08", "2017-06-08", "2017-03-09", "2017-04-09", "2017-01-09", "2017-02-09", "2017-05-09", "2017-06-09", "2017-03-15", "2017-04-15", "2017-01-15", "2017-02-15", "2017-05-15", "2017-06-15"]
CHECK_OUTS = ["2017-09-08", "2017-10-08", "2017-07-08", "2017-08-08", "2017-11-08", "2017-12-08", "2017-09-09", "2017-10-09", "2017-07-09", "2017-08-09", "2017-11-09", "2017-12-09", "2017-09-15", "2017-10-15", "2017-07-15", "2017-08-15", "2017-11-15", "2017-12-15"]

30.times do |listing_id|
  Booking.create!([
    {listing_id: listing_id, user_id: rand(1..30) % 7 + 1, check_in_date: "2017-04-08", check_out_date: "2017-05-08"},
    {listing_id: listing_id, user_id: rand(1..30) % 7 + 1, check_in_date: "2017-05-09", check_out_date: "2017-06-09"},
    {listing_id: listing_id, user_id: rand(1..30) % 7 + 1, check_in_date: "2017-07-08", check_out_date: "2017-08-08"},
  ])
end

Review.create!([
  {listing_id: 1, author_id: 1, rating: 4, title: "This host soars to the top", body: "Our stay was perfect."},
  {listing_id: 1, author_id: 1, rating: 4, title: "Stupendous", body: "This was the most amazing thing I've ever done!"},
  {listing_id: 1, author_id: 1, rating: 3, title: "Was pretty fun", body: "Got a little airsick though "},
  {listing_id: 3, author_id: 1, rating: 3, title: "Meager", body: "But the hosts is great! The bed is worst for wear but still comfy."},
  {listing_id: 1, author_id: 1, rating: 3, title: "Loud", body: "Nice stay but the propeller was really loud."},
])
