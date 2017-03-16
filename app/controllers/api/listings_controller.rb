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
    @listings = Listing.all
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
