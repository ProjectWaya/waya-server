# -*- coding: utf-8 -*-
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

countries = {}
cities = {}
{
  "fr" => ["paris", "montreuil"],
  "de" => ["berlin", "hamburg"],
  "at" => ["wien", "linz"]
}.each do |country_code, cities_codes|
  countries[country_code] = Country.create(key: country_code)
  cities_codes.each do |city_code|
    cities[city_code] = City.create(key: city_code, country: countries[country_code])
  end
end

shelters = Tag.create(key: 'shelter', parent_id: 0)
emergency_shelters = Tag.create(key: 'emergency_shelters', parent_id: shelters.id)
Tag.create(key: 'cada', parent_id: shelters.id)
Tag.create(key: 'cph', parent_id: shelters.id)
minor = Tag.create(key: 'minor', parent_id: shelters.id)
Tag.create(key: 'hotel_hostels', parent_id: shelters.id)
Tag.create(key: 'calm', parent_id: shelters.id)
trans = Tag.create(key: 'trans', parent_id: shelters.id)
healthcare = Tag.create(key: 'healthcare', parent_id: 0)
Tag.create(key: 'cmu', parent_id: healthcare.id)
Tag.create(key: 'ame', parent_id: healthcare.id)
Tag.create(key: 'pass', parent_id: healthcare.id)
Tag.create(key: 'hospitals', parent_id: healthcare.id)
Tag.create(key: 'doctors', parent_id: healthcare.id)
Tag.create(key: 'associations', parent_id: healthcare.id)
specialists = Tag.create(key: 'specialists', parent_id: healthcare.id)
tag = Tag.create(key: 'transportation', parent_id: 0)
Tag.create(key: 'prices', parent_id: tag.id)
Tag.create(key: 'transport_cards', parent_id: tag.id)
Tag.create(key: 'railway', parent_id: tag.id)
Tag.create(key: 'bus', parent_id: tag.id)
Tag.create(key: 'bike', parent_id: tag.id)
Tag.create(key: 'night', parent_id: tag.id)
Tag.create(key: 'others', parent_id: tag.id)
asylum_process = Tag.create(key: 'asylum_process', parent_id: 0)
before_asylum = Tag.create(key: 'before_asylum', parent_id: asylum_process.id)
asylum_demand = Tag.create(key: 'asylum_demand', parent_id: asylum_process.id)
refugee_rights = Tag.create(key: 'refugee_rights', parent_id: asylum_process.id)
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
contacts = Tag.create(key: 'contacts', parent_id: 0)
Tag.create(key: 'singa', parent_id: contacts.id)
Tag.create(key: 'ambassador', parent_id: contacts.id)
associations = Tag.create(key: 'associations', parent_id: contacts.id)
Tag.create(key: 'emergency', parent_id: contacts.id)
Tag.create(key: 'institutions', parent_id: contacts.id)

PointOfInterest.create(
  key: 'chu_baudricourt',
  latitude: 48.827883,
  longitude: 2.365255,
  tags: [shelters, emergency_shelters],
  address: '15 Rue Baudricourt 75013CHU (Centre d\'hebergement d\'Urgence)',
  website: 'http://equipement.paris.fr/centre-d-hebergement-d-urgence-chu-baudricourt-3451',
  country: countries["fr"],
  city: cities["paris"]
)

PointOfInterest.create(
  key: 'paomie',
  latitude: 48.880997,
  longitude: 2.369950,
  tags: [shelters, emergency_shelters, minor],
  address: '127 bd de la Villette 75010 Paris',
  website: 'http://infomie.net/spip.php?article734',
  country: countries["fr"],
  city: cities["paris"]
)

PointOfInterest.create(
  key: 'le_refuge_maison_des_ensembles',
  latitude: 48.848129,
  longitude: 2.377195,
  tags: [shelters, trans],
  address: '3 rue d’Aligre. 75012 Paris',
  website: 'http://www.le-refuge.org',
  country: countries["fr"],
  city: cities["paris"]
)

PointOfInterest.create(
  key: 'cimade_paris_luxembourg',
  latitude: 48.847532,
  longitude: 2.331333,
  tags: [contacts, asylum_process, before_asylum, refugee_rights, asylum_demand, associations],
  address: '58 rue Madame – 75006 Paris',
  website: 'http://lacimade.net/docs/site/Adresses_et_horaires_Cimade_IDF.pdf',
  phone: '(+33)142227577',
  country: countries["fr"],
  city: cities["paris"]
)

PointOfInterest.create(
  key: 'comede',
  latitude: 48.809654,
  longitude: 2.353037,
  tags: [healthcare, contacts, associations, specialists],
  address: 'Hôpital de Bicêtre 78, rue du Général Leclerc BP 31 94272 LE KREMLIN BICÊTRE',
  website: 'http://www.comede.org',
  phone: '(+33)145213840',
  country: countries["fr"],
  city: cities["paris"]
)
