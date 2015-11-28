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


tag = Tag.create(key: 'shelter', parent_id: 0)
Tag.create(key: 'emergency_shelters', parent_id: tag.id)
Tag.create(key: 'cada', parent_id: tag.id)
Tag.create(key: 'cph', parent_id: tag.id)
Tag.create(key: 'hotel_hostels', parent_id: tag.id)
Tag.create(key: 'calm', parent_id: tag.id)
tag = Tag.create(key: 'healthcare', parent_id: 0)
Tag.create(key: 'cmu', parent_id: tag.id)
Tag.create(key: 'ame', parent_id: tag.id)
Tag.create(key: 'pass', parent_id: tag.id)
Tag.create(key: 'hospitals', parent_id: tag.id)
Tag.create(key: 'doctors', parent_id: tag.id)
Tag.create(key: 'associations', parent_id: tag.id)
Tag.create(key: 'specialists', parent_id: tag.id)
tag = Tag.create(key: 'transportation', parent_id: 0)
Tag.create(key: 'prices', parent_id: tag.id)
Tag.create(key: 'transport_cards', parent_id: tag.id)
Tag.create(key: 'railway', parent_id: tag.id)
Tag.create(key: 'bus', parent_id: tag.id)
Tag.create(key: 'bike', parent_id: tag.id)
Tag.create(key: 'night', parent_id: tag.id)
Tag.create(key: 'others', parent_id: tag.id)
tag = Tag.create(key: 'asylum_process', parent_id: 0)
Tag.create(key: 'before_asylum_deman', parent_id: tag.id)
Tag.create(key: 'asylum_process', parent_id: tag.id)
Tag.create(key: 'refugee_rights', parent_id: tag.id)
tag = Tag.create(key: 'education', parent_id: 0)
Tag.create(key: 'education_rights', parent_id: tag.id)
Tag.create(key: 'school_for_child', parent_id: tag.id)
Tag.create(key: 'diplomas', parent_id: tag.id)
Tag.create(key: 'language_learning', parent_id: tag.id)
tag = Tag.create(key: 'food', parent_id: 0)
Tag.create(key: 'free_meals', parent_id: tag.id)
Tag.create(key: 'cheap_meals', parent_id: tag.id)
Tag.create(key: 'meals_of_the_world', parent_id: tag.id)
tag = Tag.create(key: 'administrative_process', parent_id: 0)
Tag.create(key: 'ame', parent_id: tag.id)
Tag.create(key: 'cmu', parent_id: tag.id)
Tag.create(key: 'ada', parent_id: tag.id)
Tag.create(key: 'job', parent_id: tag.id)
Tag.create(key: 'civil_status', parent_id: tag.id)
Tag.create(key: 'other_documents', parent_id: tag.id)
Tag.create(key: 'travel_documents', parent_id: tag.id)
Tag.create(key: 'welfare_and_family_benefits', parent_id: tag.id)
Tag.create(key: 'rsa', parent_id: tag.id)
tag = Tag.create(key: 'entertainment', parent_id: 0)
Tag.create(key: 'internet', parent_id: tag.id)
Tag.create(key: 'restaurants', parent_id: tag.id)
Tag.create(key: 'party', parent_id: tag.id)
Tag.create(key: 'cultural_life', parent_id: tag.id)
Tag.create(key: 'sports', parent_id: tag.id)
Tag.create(key: 'money_change', parent_id: tag.id)
Tag.create(key: 'associations', parent_id: tag.id)
tag = Tag.create(key: 'contacts', parent_id: 0)
Tag.create(key: 'singa', parent_id: tag.id)
Tag.create(key: 'ambassadors', parent_id: tag.id)
Tag.create(key: 'associations', parent_id: tag.id)
Tag.create(key: 'emergency', parent_id: tag.id)
Tag.create(key: 'institutions', parent_id: tag.id)

User.create(email: "bibekshrestha@gmail.com", password: "helloworld", password_confirmation: "helloworld")
