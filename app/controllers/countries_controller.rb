class CountriesController < ApplicationController

  def index
    @countries = Country.all.includes(:cities)
    included = params[:include].try(:split, ",")
    render json: @countries, include: included
  end
end