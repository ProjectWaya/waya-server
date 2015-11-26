class PointsOfInterestController < ApplicationController
  before_action :set_point_of_interest, only: [:show, :edit, :update, :destroy]

  # GET /points_of_interest
  # GET /points_of_interest.json
  def index
    included = params[:include].try(:split, ",")
    @points_of_interest = PointOfInterest.all
    # @points_of_interest.each {|poi| poi.locale = params[:locale] }
    render json: @points_of_interest, include: included
  end
end
