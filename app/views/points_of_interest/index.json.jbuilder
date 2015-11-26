json.array!(@points_of_interest) do |point_of_interest|
  json.extract! point_of_interest, :id, :key, :latitude, :longitude, :city, :country, :zip, :address, :contact, :opening_hours
  json.url point_of_interest_url(point_of_interest, format: :json)
end
