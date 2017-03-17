class Api::RegionsController < ApplicationController
  def show
    @region = Region.find(params[:id])
    render :show
  end

  def index
    @regions = Region.all
    render :index
  end

  # private
  #
  # def region_params
  #   paras.require(:regions).permit(:city, :state, :image_url)
  # end
end
