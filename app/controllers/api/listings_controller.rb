class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.create(listing_params)
    render :show
  end

  def update
  end

  def show
    @listing = Listing.find(params[:id])

  end

  def index
    @listings = Listing.where(region_id: params[:region_id])
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
end
