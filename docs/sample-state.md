```js
{
  currentUser: {
    id: 1,
    username: "ultrasonic",
    image_url: "assets/user1"
  },

  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
  },

  createReview: {
    body: "",
    author_id: null,
    place_id: null,
    number_of_gears: null,  
  },

  listings: {
    1: {
      title: "Urban dwelling",
      description: "Stony walls provide respite from the outdoors",
      region_id: "1",
      host_id: 1,
      image_urls: {
        1: "",
        2: "",
      },
      latitude: 5.23,
      longitude 156.57,
      max_guests: 10,
      property_type: "House",
      house_rules: "Remember to replace the coal!",
    }  
  },

  regions: {
    1: {
      city: "New York",
      state: "New York",
      zip: '11001',
      image_url: 'assets/region1'
    }
  }

  reviews: {
    1: {
      body: "Pretty good, but was creaky",
      author_id: 1,
      listing_id: 1,
      number_of_gears: 4
    }
  },

  bookings: {
    1: {
      user_id: 1,
      listing_id: 1,
      check_in_date: 5/1/2017,
      check_out_date: 5/15/2017,
    }
  },
  s
  users: {
    1: {
      username: "Ava",
      about_me: "Lorem ipsem",
      image_url: "",
      region_id: 1
    }
  }  
}
```
