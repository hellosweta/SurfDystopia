# SurfDystopia

[SurfDystopia live][heroku]

[heroku]: https://surfdystopia.herokuapp.com/#/

SurfDystopia is a full-stack web application inspired by CouchSurfing and AirBnb with a Retro Futurism Twist. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React/Redux on the frontend.

## Features & Implementation

### Regions Rendering and Search
Regions are the 6 cities in which listings exist. The database holds the `city` and `state` strings, an `image_url`, and the `latitude` and `longitude` to allow for centering the Map on the respective region.

![Splash Page][splashpage]

Upon starting the app, we render the App and the `Home` Component at the Index Route. The `Home` Component fetches regions from the state and renders them in a component. Each region affords the user to view all listings in that city. Additionally, the user can search for regions at the top of the page and also be directed to the listings that belong to that region. Either searching or clicking a region will direct the app to a the listing index route which renders the `Listing Index` component.

![Regions Index][regions]

### Listings Rendering and Search

Listings are locations that users can book for a a range of dates. They are stored in the database with foreign keys for the region and host of the listing. The `title`, `latitude`, `longitude`, `image_url`, `description`, `max_guests`, `property_type`, and `house_rules` are also stored in the database to allow for rendering each listing. Listings are rendered in a `Listing Index` component. At the Listing Index Route, users can also search listings by availability and view them on the map.

Within a region search page, Users can make availability search queries via the `Availability Search` component at the top of the page. On submit, the availability search bar dispatches an action, which sends an ajax request to the search action of the listings controller which simply checks if the listing is available via a method in the model.

```.js
def is_available?(check_in_date, check_out_date)
  self.bookings.each do |booking|
    if booking.check_in_date <= check_out_date && check_in_date <= booking.check_out_date
      return false
    end
  end
  true
end
```

`Listing Index` will then render available listings. Additionally, users can move through the map to see available listings. Each marker also allows users to click to the specific listing's show page.

![Listing Index][listingindex]

### Bookings

Bookings are stored in the database as a join table storing `listing_id` and `user_id`. Additionally `check_in_date` and `check_out_date` are stored. Users can request bookings. Bookings will be saved to the database if they are available. Users are also able to see their bookings on listing pages and delete them.

![Listing Show][listingshow]

## Next Steps

I plan to add two additional features to SurfDystopia:

### Add Listing

Registered Users will be able to upload their own listings to the site through a form. Listings will be rendered under the region specified by users.

### Image Upload

I plan to use react-dropzone to allow users to upload images to make listing show pages for their own listings. Additional they will be able to upload their own profile pictures.


![SurfDystopia live][heroku]
[splashpage]: ./docs/Screenshots/SplashImage.png
[regions]: ./docs/Screenshots/RegionIndex.png
[regions]: ./docs/Screenshots/RegionIndex.png
[listingshow]: ./docs/Screenshots/ListingShowPage.png
