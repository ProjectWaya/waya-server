class UserStatusesController < ApplicationController

  def index
    @statuses = UserStatus.all
    render json: @statuses
  end
end