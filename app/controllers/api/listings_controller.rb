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
  end

  def search
    all_listings = Listing.where(region_id: params[:id])
    @listings = all_listings.select do |listing|
      listing.is_available?(Date.parse(params[:listing][:check_in_date]),
                            Date.parse(params[:listing][:check_out_date]))
    end
    render :index
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
