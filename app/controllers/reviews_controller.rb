class ReviewsController < ApplicationController
  def create
    @review = Review.create(review_params)
    render :show
  end

  def destroy
  end

  def index
    @listings = Review.where(listing_id: params[:listing_id])
    render :index
  end

  def show
    @review = Review.find([:id])
    render :show
  end

  def method_name

  end
end
