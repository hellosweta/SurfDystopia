class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.create(listing_params)
    render :show
  end

  def update
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def index
    @listings = Listing.where(region_id: params[:region_id])
    render :index

    # @listings = Listing.in_bounds(params[:bounds])
    # eventually with search you can do @listings = Listing.includes(search term)
  end

  def search
    debugger;
    @booking = Booking.new(booking_params)

    @listings = Listing.where(region_id: params[:id])

    @listings.select do |listing|
      listing.is_available?(params[:check_in_date], params[:check_out_date])
    end
    
    render :index

    # @listings = Listing.in_bounds(params[:bounds])
    # eventually with search you can do @listings = Listing.includes(search term)
  end

  private

  def listing_params
    params.require(:listing).permit(
      :host_id,
      :title,
      :longitude,
      :latitude,
      :image_url,
      :description,
      :region_id,
      :max_guests,
      :property_type,
      :house_rules)
  end

  def booking_params
    params.require(:booking).permit(:listing_id, :user_id, :check_in_date, :check_out_date)
  end
end
