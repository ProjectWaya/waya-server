# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

UserStatus.create(id: 0, key: 'refugee')
UserStatus.create(id: 1, key: 'asylum_seeker')
UserStatus.create(id: 2, key: 'just_arrived')

Tag.create(id: 0, key: 'main_categories')

["fr", "de", "at"].each do |country_code|
  Country.create(key: country_code)
end
{
  "fr" => ["Paris", "Montreuil"],
  "de" => ["Berlin", "Hamburg"],
  "at" => ["Wien", "Linz"]
}.each do |country, cities|
  country = Country.where(key: country).first
  cities.each do |city|
    City.create(key: city, country: country)
  end
end


