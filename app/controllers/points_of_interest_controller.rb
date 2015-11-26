class PointsOfInterestController < ApplicationController
  before_action :set_point_of_interest, only: [:show, :edit, :update, :destroy]

  # GET /points_of_interest
  # GET /points_of_interest.json
  def index
    @points_of_interest = PointOfInterest.all
  end

  # GET /points_of_interest/1
  # GET /points_of_interest/1.json
  def show
  end

  # GET /points_of_interest/new
  def new
    @point_of_interest = PointOfInterest.new
  end

  # GET /points_of_interest/1/edit
  def edit
  end

  # POST /points_of_interest
  # POST /points_of_interest.json
  def create
    @point_of_interest = PointOfInterest.new(point_of_interest_params)

    respond_to do |format|
      if @point_of_interest.save
        format.html { redirect_to @point_of_interest, notice: 'Point of interest was successfully created.' }
        format.json { render :show, status: :created, location: @point_of_interest }
      else
        format.html { render :new }
        format.json { render json: @point_of_interest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /points_of_interest/1
  # PATCH/PUT /points_of_interest/1.json
  def update
    respond_to do |format|
      if @point_of_interest.update(point_of_interest_params)
        format.html { redirect_to @point_of_interest, notice: 'Point of interest was successfully updated.' }
        format.json { render :show, status: :ok, location: @point_of_interest }
      else
        format.html { render :edit }
        format.json { render json: @point_of_interest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /points_of_interest/1
  # DELETE /points_of_interest/1.json
  def destroy
    @point_of_interest.destroy!
    respond_to do |format|
      format.html { redirect_to points_of_interest_url, notice: 'Point of interest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point_of_interest
      @point_of_interest = PointOfInterest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def point_of_interest_params
      params.require(:point_of_interest).permit(:key, :latitude, :longitude, :city, :country, :zip, :address, :contact, :opening_hours)
    end
end
