class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author = current_user
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status:422
    end

  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  def index
    @reviews = Review.where(listing_id: params[:listing_id])
    render :index
  end

  def show
    @review = Review.find([:id])
    render :show
  end

  private

  def review_param
    params.require(:review).permit(:listing_id, :author_id, :rating, :title, :body)
  end
end
