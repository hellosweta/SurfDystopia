Component Hierarchy

AuthForm Container
- AuthForm
- Errors Components

Nav Container (Header)
- User Dropdown Container
  - User Dropdown Items

- Search Container
  - Search Component
  - Date Component

Home Container
  - RegionsContainer

Listing Container
  - Booking Container
    - Date Component
  - User Component
  - Listing Item
  - Review Form
  - Reviews Container
    - Review Items

Users Container
  - User Component
  - Reviews Container
    - Review Items

Dashboard Container
  - User Component
  - User Bookings Component
  - User Guests Component
  - Edit User Form

Search Results Container
  - Date Component
  - Listing Items
  - Map Component

Routes

"/sign-up" - "AuthFormContainer"
"/sign-in" - "AuthFormContainer"
"/home" - "HomeContainer"
"/search" - "SearchResultsContainer"
"/listings/:listingId" - "ListingContainer"
"/dashboard" - "DashboardContainer"
"/profile/:userId" - "UsersContainer"
"/dashboard/edit" - "EditUserForm"
