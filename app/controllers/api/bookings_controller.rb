class Api::BookingsController < ApplicationController
  def index
    @bookings = current_user.bookings
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    if current_user.nil?
      render(
        json: ["Surfer, you must be logged in to book a couch. Hit Demo on the top right!"],
        status: 401
      )
    else
      @booking.user_id = current_user.id
      if @booking.save
        render :show
      else
        render json: @booking.errors.full_messages, status: 422
      end
    end
  end

  def update
    @booking = current_user.bookings.find(params[:id])
    if @booking.user == current_user
      if @booking.update(booking_params)
        render :show
      else
        render json: @booking.errors.full_messages, status:422
      end
    else
      render(
        json: ["Can only update your own booking, surfer"]
      )
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(:listing_id, :user_id, :check_in_date, :check_out_date)
  end
end
