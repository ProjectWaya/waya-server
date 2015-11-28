class PointsOfInterestController < ApplicationController
  before_action :set_point_of_interest, only: [:show, :edit, :update, :destroy]

  # GET /points_of_interest
  # GET /points_of_interest.json
  def index
    included = params[:include].try(:split, ",")
    filter = params[:filter] || {}
    ids = PointOfInterest.select(:id)
      .joins(:city, :country, :tags)
      .where(cities: { id: filter[:city] })
    tags_ids = filter[:tag].try(:split, ",")
    ids = ids.where(tags: { id: tags_ids }) unless tags_ids.blank?
    points_of_interest = PointOfInterest.eager_load(:city, :country, :tags).where(id: ids)
    render json: points_of_interest, include: included
  end
end
