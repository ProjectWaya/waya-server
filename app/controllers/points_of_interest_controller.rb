class PointsOfInterestController < ApplicationController
  before_action :set_point_of_interest, only: [:show, :edit, :update, :destroy]

  # GET /points_of_interest
  # GET /points_of_interest.json
  def index
    included = params[:include].try(:split, ",")
    city_key = filter[:city]
    if city_key
      render json: fetch_pois(city_key), include: included
    else
      render json: city_key_missing_error, adapter: :json
    end
  end

  private

  def filter
    @filter ||= params[:filter] || {}
  end

  def tags_keys
    tags_keys = filter[:tag]
    tags_keys = tags_keys.try(:split, ",") unless tags_keys.is_a?(Array)
  end
 
  def fetch_pois(city_key)
    ids = PointOfInterest.select(:id)
      .joins(:city, :country, :tags)
      .where(cities: { key: city_key })
    ids = ids.where(tags: { key: tags_keys }) unless tags_keys.blank?
    PointOfInterest.eager_load(:city, :country, :tags).where(id: ids)
  end

  def city_key_missing_error
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
