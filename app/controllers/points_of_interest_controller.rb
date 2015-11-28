class PointsOfInterestController < ApplicationController
  before_action :set_point_of_interest, only: [:show, :edit, :update, :destroy]

  # GET /points_of_interest
  # GET /points_of_interest.json
  def index
    included = params[:include].try(:split, ",")
    city_id = filter[:city]
    if city_id
      render json: fetch_pois(city_id), include: included
    else
      render json: city_id_missing_error, adapter: :json
    end
  end

  private

  def filter
    @filter ||= params[:filter] || {}
  end

  def tags_ids
    tags_ids = filter[:tag]
    tags_ids = tags_ids.try(:split, ",") unless tags_ids.is_a?(Array)
  end
 
  def fetch_pois(city_id)
    ids = PointOfInterest.select(:id)
      .joins(:city, :country, :tags)
      .where(cities: { id: city_id })
    ids = ids.where(tags: { id: tags_ids }) unless tags_ids.blank?
    PointOfInterest.eager_load(:city, :country, :tags).where(id: ids)
  end

  def city_id_missing_error
    {
      errors: [
        {
         status: "400",
         code: "MANDATORY_QUERY_PARAMETER_MISSING",
         detail: "filter[country] query parameter is missing",
         source: {
           parameter: "filter[country]"
         }
        }
      ]
    }
  end
end
