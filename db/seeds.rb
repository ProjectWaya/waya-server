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

main_categories = Tag.create(id: 0, key: 'main_categories')

countries = {}
cities = {}
{
  'fr' => %w(paris montreuil),
  'de' => %w(berlin hamburg),
  'at' => %w(wien linz)
}.each do |country_code, cities_codes|
  countries[country_code] = Country.create(key: country_code)
  cities_codes.each do |city_code|
    cities[city_code] = City.create(key: city_code, country: countries[country_code])
  end
end

shelters = Tag.create(key: 'shelter', parent_id: 0)
emergency_shelters = Tag.create(key: 'emergency_shelters', parent_id: shelters.id)
cada = Tag.create(key: 'cada', parent_id: shelters.id)
cph = Tag.create(key: 'cph', parent_id: shelters.id)
minor = Tag.create(key: 'minor', parent_id: shelters.id)
hotel_hostels = Tag.create(key: 'hotel_hostels', parent_id: shelters.id)
calm = Tag.create(key: 'calm', parent_id: shelters.id)
women = Tag.create(key: 'women', parent_id: shelters.id)
family = Tag.create(key: 'family', parent_id: shelters.id)
trans = Tag.create(key: 'trans', parent_id: shelters.id)
healthcare = Tag.create(key: 'healthcare', parent_id: 0)
hc_cmu = Tag.create(key: 'hc_cmu', parent_id: healthcare.id)
hc_ame = Tag.create(key: 'hc_ame', parent_id: healthcare.id)
pass = Tag.create(key: 'pass', parent_id: healthcare.id)
hospitals = Tag.create(key: 'hospitals', parent_id: healthcare.id)
doctors = Tag.create(key: 'doctors', parent_id: healthcare.id)
hc_associations = Tag.create(key: 'hc_associations', parent_id: healthcare.id)
hc_minor = Tag.create(key: 'hc_minor', parent_id: healthcare.id)
specialists = Tag.create(key: 'specialists', parent_id: healthcare.id)
tag = Tag.create(key: 'transportation', parent_id: 0)
prices = Tag.create(key: 'prices', parent_id: tag.id)
transport_cards = Tag.create(key: 'transport_cards', parent_id: tag.id)
railway = Tag.create(key: 'railway', parent_id: tag.id)
bus = Tag.create(key: 'bus', parent_id: tag.id)
bike = Tag.create(key: 'bike', parent_id: tag.id)
night = Tag.create(key: 'night', parent_id: tag.id)
others = Tag.create(key: 'others', parent_id: tag.id)
asylum_process = Tag.create(key: 'asylum_process', parent_id: 0)
before_asylum = Tag.create(key: 'before_asylum', parent_id: asylum_process.id)
asylum_demand = Tag.create(key: 'asylum_demand', parent_id: asylum_process.id)
refugee_rights = Tag.create(key: 'refugee_rights', parent_id: asylum_process.id)
tag = Tag.create(key: 'education', parent_id: 0)
education_rights = Tag.create(key: 'education_rights', parent_id: tag.id)
school_for_child = Tag.create(key: 'school_for_child', parent_id: tag.id)
diplomas = Tag.create(key: 'diplomas', parent_id: tag.id)
language_learning = Tag.create(key: 'language_learning', parent_id: tag.id)
tag = Tag.create(key: 'food', parent_id: 0)
free_meals = Tag.create(key: 'free_meals', parent_id: tag.id)
cheap_meals = Tag.create(key: 'cheap_meals', parent_id: tag.id)
meals_of_the_world = Tag.create(key: 'meals_of_the_world', parent_id: tag.id)
tag = Tag.create(key: 'administrative_process', parent_id: 0)
ap_ame = Tag.create(key: 'ap_ame', parent_id: tag.id)
ap_cmu = Tag.create(key: 'ap_cmu', parent_id: tag.id)
ada = Tag.create(key: 'ada', parent_id: tag.id)
job = Tag.create(key: 'job', parent_id: tag.id)
civil_status = Tag.create(key: 'civil_status', parent_id: tag.id)
other_documents = Tag.create(key: 'other_documents', parent_id: tag.id)
travel_documents = Tag.create(key: 'travel_documents', parent_id: tag.id)
welfare_and_family_benefits = Tag.create(key: 'welfare_and_family_benefits', parent_id: tag.id)
rsa = Tag.create(key: 'rsa', parent_id: tag.id)
tag = Tag.create(key: 'entertainment', parent_id: 0)
internet = Tag.create(key: 'internet', parent_id: tag.id)
restaurants = Tag.create(key: 'restaurants', parent_id: tag.id)
party = Tag.create(key: 'party', parent_id: tag.id)
cultural_life = Tag.create(key: 'cultural_life', parent_id: tag.id)
sports = Tag.create(key: 'sports', parent_id: tag.id)
money_change = Tag.create(key: 'money_change', parent_id: tag.id)
ent_associations = Tag.create(key: 'ent_associations', parent_id: tag.id)
contacts = Tag.create(key: 'contacts', parent_id: 0)
singa = Tag.create(key: 'singa', parent_id: contacts.id)
ambassador = Tag.create(key: 'ambassador', parent_id: contacts.id)
cont_associations = Tag.create(key: 'cont_associations', parent_id: contacts.id)
emergency = Tag.create(key: 'emergency', parent_id: contacts.id)
institutions = Tag.create(key: 'institutions', parent_id: contacts.id)

PointOfInterest.create(
  key: 'chu_baudricourt',
  latitude: 48.827883,
  longitude: 2.365255,
  tags: [shelters, emergency_shelters],
  address: '15 Rue Baudricourt 75013CHU (Centre d\'hebergement d\'Urgence)',
  website: 'http://equipement.paris.fr/centre-d-hebergement-d-urgence-chu-baudricourt-3451',
  country: countries['fr'],
  city: cities['paris']
)

PointOfInterest.create(
  key: 'paomie',
  latitude: 48.880997,
  longitude: 2.369950,
  tags: [shelters, emergency_shelters, minor],
  address: '127 bd de la Villette 75010 Paris',
  website: 'http://infomie.net/spip.php?article734',
  country: countries['fr'],
  city: cities['paris']
)

PointOfInterest.create(
  key: 'le_refuge_maison_des_ensembles',
  latitude: 48.848129,
  longitude: 2.377195,
  tags: [shelters, trans],
  address: '3 rue d’Aligre. 75012 Paris',
  website: 'http://www.le-refuge.org',
  country: countries['fr'],
  city: cities['paris']
)

PointOfInterest.create(
  key: 'cimade_paris_luxembourg',
  latitude: 48.847532,
  longitude: 2.331333,
  tags: [contacts, asylum_process, before_asylum, refugee_rights, asylum_demand, cont_associations],
  address: '58 rue Madame – 75006 Paris',
  website: 'http://lacimade.net/docs/site/Adresses_et_horaires_Cimade_IDF.pdf',
  phone: '(+33)142227577',
  country: countries['fr'],
  city: cities['paris']
)

PointOfInterest.create(
  key: 'comede',
  latitude: 48.809654,
  longitude: 2.353037,
  tags: [healthcare, contacts, hc_associations, specialists],
  address: 'Hôpital de Bicêtre 78, rue du Général Leclerc BP 31 94272 LE KREMLIN BICÊTRE',
  website: 'http://www.comede.org',
  phone: '(+33)145213840',
  country: countries['fr'],
  city: cities['paris']
)

PointOfInterest.create(key: 'chu_george_sand', latitude: 48.839289, longitude: 2.335927, address: "26 avenue de l’Observatoire 75 014 Paris ", city: cities['paris'], tags: [before_asylum,
                                                                                                                                                                             asylum_demand,
                                                                                                                                                                             refugee_rights])
PointOfInterest.create(key: 'chu_crimee', latitude: 48.890021, longitude: 2.378366, address: "166 rue de Crimée 75 019 Paris ", city: cities['paris'], tags: [emergency_shelters])
PointOfInterest.create(key: 'la_maison_coeur_de_femmes', latitude: 48.826522, longitude: 2.36875, address: "77 rue du Château-des-Rentiers 75013 PARIS", city: cities['paris'], website: 'http://aurore.asso.fr/urgence', tags: [emergency_shelters, women])
PointOfInterest.create(key: 'office_francais_de_protection_des_refugies_et_des_apatrides', latitude: 48.853181, longitude: 2.490621, address: "201, rue Carnot
94 136 FONTENAY-SOUS-BOIS CEDEX ",
                       opening_hours: 'lundi - vendredi : 9h - 15h', city: cities['paris'], website: 'http://www.ofpra.gouv.fr/ ', phone: "tél : 01 58 68 10 10
fax : 01 58 68 18 99 ",
                       tags: [trans, shelters])
PointOfInterest.create(key: 'cour_nationale_du_droit_dasile_cnda', latitude: 48.850949, longitude: 2.422638, address: "35, rue Cuvier
93 558 MONTREUIL-SOUS-BOIS Cedex ",
                       opening_hours: 'lundi - vendredi : 8h30 - 20h', city: cities['paris'], website: 'http://www.commission-refugies.fr/ ', phone: "tél : 01 48 10 40 00
fax : 01 48 18 41 97 ",
                       tags: [asylum_demand])
PointOfInterest.create(key: 'office_francais_de_limmigration_et_de_lintegration_ofii', latitude: 48.854762, longitude: 2.372933, address: '48 rue de la roquette, 75 011 PARIS ',
                       opening_hours: 'lundi-vendredi: 8h30-12h ; 12h45-17h', city: cities['paris'], website: 'http://www.ofii.fr', phone: "tél : 01 55 28 19 40 ",
                       tags: [before_asylum,
                              asylum_demand,
                              refugee_rights,
                              institutions])

PointOfInterest.create(key: 'actup', latitude: 48.857403, longitude: 2.374731, address: "45, rue Sedaine
75 011 PARIS ",
                       city: cities['paris'],  website: 'http://www.actupparis.org/', phone: "tél : 01 48 06 13 89 / fax : 01 48 06 16 74 ",  tags: [hc_associations])
PointOfInterest.create(key: 'amnesty_international_section_francaise', latitude: 48.875883,  longitude: 2.373188,  address: "76, boulevard de la Villette
75 019 PARIS ",
                       city: cities['paris'],  website: 'http://www.amnesty.fr/ ', phone: "tél : 01 53 38 65 16 / fax : 01 53 38 55 00 ",  tags: [cont_associations])

PointOfInterest.create(key: 'association_primo_levi', latitude: 48.867467, longitude: 2.372534, address: "107, avenue Parmentier
75 011 PARIS ",
                       city: cities['paris'],  website: 'http://www.primolevi.org', phone: "tél : 01 43 14 08 50 / fax : 01 43 14 08 28 ", tags: [hc_associations, specialists])
PointOfInterest.create(key: 'cimade_paris_batignolles', latitude: 48.882972, longitude: 2.322587, address: "46 bd des Batignolles – 75017 Paris", opening_hours: "Permanence sans rendez-vous mardi matin à 9h (venir avant 11h) ", city: cities['paris'], website: 'http://lacimade.net/docs/site/Adresses_et_horaires_Cimade_IDF.pdf', phone: 'Tel : 01 40 08 05 34 ', tags: [before_asylum,
                                                                                                                                                                                                                                                                                                                                                                                asylum_demand,
                                                                                                                                                                                                                                                                                                                                                                                refugee_rights,
                                                                                                                                                                                                                                                                                                                                                                                cont_associations])
PointOfInterest.create(key: 'cimade_aulnay_sous_bois_93', latitude: 48.931282, longitude: 2.499838, address: "Eglise Réformée – 1 bd de Gourgues – 93600 Aulnay sous Bois ", opening_hours: "Permanence sans rendez-vous le jeudi matin de 9h30 à 11h30 ", city: cities['paris'], website: 'http://lacimade.net/docs/site/Adresses_et_horaires_Cimade_IDF.pdf', tags: [before_asylum,
                                                                                                                                                                                                                                                                                                                                                                       asylum_demand,
                                                                                                                                                                                                                                                                                                                                                                       refugee_rights,
                                                                                                                                                                                                                                                                                                                                                                       cont_associations])
PointOfInterest.create(key: 'cimade_montreuil_93', latitude: 48.861655, longitude: 2.440699, address: "Point d’accès au droit de Montreuil— 12, bd Rouget de Lisle—93100 Montreuil ", opening_hours: 'Permanence le vendredi matin (9h30-12h30) sans rendez-vous.', city: cities['paris'], website: 'http://lacimade.net/docs/site/Adresses_et_horaires_Cimade_IDF.pdf', tags: [before_asylum,
                                                                                                                                                                                                                                                                                                                                                                                asylum_demand,
                                                                                                                                                                                                                                                                                                                                                                                refugee_rights,
                                                                                                                                                                                                                                                                                                                                                                                cont_associations])
PointOfInterest.create(key: 'cimade_cergy_95', latitude: 49.039311, longitude: 2.079776, address: 'Terrasse du Centre commercial des Trois Fontaines 95000 CERGY', opening_hours: "Permanence sans rendez-vous le mercredi de 14h à 17h", city: cities['paris'], website: 'http://lacimade.net/docs/site/Adresses_et_horaires_Cimade_IDF.pdf', phone: 'Tel : 01 34 41 28 34 ', tags: [before_asylum,
                                                                                                                                                                                                                                                                                                                                                                                      asylum_demand,
                                                                                                                                                                                                                                                                                                                                                                                      refugee_rights,
                                                                                                                                                                                                                                                                                                                                                                                      cont_associations])
PointOfInterest.create(key: 'federation_des_associations_de_soutien_aux_travailleurs_immigres_fasti', latitude: 48.865774, longitude: 2.389835, address: "58, rue des Amandiers
75 020 PARIS ",
                       city: cities['paris'],  website: 'http://www.fasti.org', phone: "tél : 01 58 53 58 53 / fax : 01 58 53 58 43 ",  tags: [hc_associations, specialists])
PointOfInterest.create(key: 'forum_refugies', latitude: 45.762771, longitude: 4.891641, address: "28, rue de la Baïsse - BP 1054
69 612 VILLEURBANNE CEDEX ",
                       city: cities['paris'],  website: 'http://www.forumrefugies.org ', phone: "tél : 04 72 97 05 80 / fax : 04 72 97 05 81 ", tags: [before_asylum,
                                                                                                                                                       asylum_demand,
                                                                                                                                                       refugee_rights,
                                                                                                                                                       cont_associations])
PointOfInterest.create(key: 'groupe_accueil_solidarite_gas', latitude: 48.792921, longitude: 2.365110, address: "17, place Maurice Thorez
94 800 VILLEJUIF ",
                       city: cities['paris'],  website: 'http://pagesperso-orange.fr/gas.asso', phone: "tél : 01 42 11 07 95 / fax : 01 42 11 09 91 ", tags: [before_asylum,
                                                                                                                                                              asylum_demand,
                                                                                                                                                              refugee_rights,
                                                                                                                                                              cont_associations])
PointOfInterest.create(key: 'groupe_dinformation_et_de_soutien_des_immigres_gisti', latitude: 48.858930, longitude: 2.375842, address: "3, villa Marcès
75 011 PARIS ",
                       city: cities['paris'],  website: 'http://www.gisti.org', phone: "tél : 01 43 14 60 66 / fax : 01 43 14 60 69 ",  tags: [before_asylum,
                                                                                                                                               asylum_demand,
                                                                                                                                               refugee_rights,
                                                                                                                                               cont_associations])
PointOfInterest.create(key: 'ligue_des_droits_de_lhomme_ldh', latitude: 48.891195, longitude: 2.340545, address: "138, rue Marcadet
75 018 PARIS ", city: cities['paris'], website: 'http://www.ldh-france.org', phone: "tél : 01 56 55 51 00 / fax : 01 56 55 51 21 ", tags: [before_asylum, asylum_demand, refugee_rights,
                                                                                                                                           cont_associations])
PointOfInterest.create(key: 'mouvement_contre_le_racisme_et_pour_lamitie_entre_les_peuples_mrap', latitude: 48.872671, longitude: 2.358839, address: "43, boulevard Magenta
75 010 PARIS ",
                       city: cities['paris'],  website: 'http://www.mrap.asso.fr', phone: "tél : 01 53 38 99 99 / fax : 01 40 40 90 98 ", tags: [before_asylum,
                                                                                                                                                 asylum_demand,
                                                                                                                                                 refugee_rights,
                                                                                                                                                 cont_associations])
PointOfInterest.create(key: 'secours_catholique', latitude: 48.901949, longitude: 2.384059, address: "23, boulevard de la Commanderie
75 019 PARIS ",
                       city: cities['paris'],  website: 'http://www.secours-catholique.asso.fr', phone: "tél : 01 48 39 10 92 / fax : 01 48 33 79 70 ", tags: [cont_associations])
PointOfInterest.create(key: 'coallia', latitude: 48.847265, longitude: 2.389111, address: "16-18 Cour Saint-Éloi 75012 Paris", city: cities['paris'], website: 'http://www.coallia.org/', phone: "tél 01 53 46 38 38
fax 01 53 46 39 00",
                       tags: [cont_associations])
PointOfInterest.create(key: 'pension_de_famille_alchimie_des_jours', latitude: 48.881465, longitude: 2.372260, address: '3, rue de Chaumont. 75019 Paris', city: cities['paris'], tags: [family])
PointOfInterest.create(key: 'cpam_18eme', latitude: 48.894551, longitude: 2.362854, address: '15 Rue des Fillettes. 75018 Paris', opening_hours: "Lundi        08:30 – 17:00
Mardi        08:30 – 17:00
Mercredi   08:30 – 17:00
Jeudi         08:30 – 12:00
Vendredi   08:30 – 17:00
Samedi        Fermé
Dimanche    Fermé",
                       city: cities['paris'], website: 'http://www.ameli.fr/assures/votre-caisse/', phone: '0 811 70 36 46', tags: [ap_cmu,
                                                                                                                                    hc_cmu])
PointOfInterest.create(key: 'cpam_19eme', latitude: 48.892893, longitude: 2.376145, address: '74 bis Rue Archereau. 75019 Paris', city: cities['paris'],  website: 'http://www.ameli.fr/assures/votre-caisse/', phone: '0 811 70 36 46', tags: [ap_cmu,
                                                                                                                                                                                                                                                hc_cmu])
PointOfInterest.create(key: 'hc_hopital_europeen_georges_pompidou', latitude: 48.839385, longitude: 2.273559, address: "20, rue Leblanc – Paris 15e", opening_hours: "Consultations au sein du Service d’Accueil des urgences (SAU)", city: cities['paris'], phone: '01 56 09 20 00', tags: [pass, specialists])
PointOfInterest.create(key: 'hopital_europeen_georges_pompidou', latitude: 48.839427, longitude: 2.273569,  address: '20, rue Leblanc 75015 PARIS',  city: cities['paris'], website: 'http://hopital-georgespompidou.aphp.fr', phone: '01 56 09 20 00', tags: [emergency])
PointOfInterest.create(key: 'hopital_robert_debre', latitude: 48.878918, longitude: 2.403386, address: "48, boulevard Sérurier  75019 Paris", city: cities['paris'], website: 'http://robertdebre.aphp.fr', phone: '01 40 03 20 00', tags: [emergency])
PointOfInterest.create(key: 'medecins_du_monde', latitude: 48.862763, longitude: 2.376432, address: '62, Rue Marcadet - 75018 Paris', city: cities['paris'], website: 'http://www.medecinsdumonde.org', phone: "Tél. : 01 44 92 15 15 - Fax : 01 44 92 99 99", tags: [cont_associations,
                                                                                                                                                                                                                                                                      hc_associations])
PointOfInterest.create(key: 'guichet_unique_paris', latitude: 48.898747, longitude: 2.347599, address: '92, boulevard Ney, 75 018 Paris  ', city: cities['paris'], phone: '01 58 80 80 80', tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_seine_et_marne',  latitude: 48.541624, longitude: 2.655166, address: "12, rue des Saints Pères, 77 000 Melun ", city: cities['paris'], tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_yvelines', latitude: 48.803027, longitude: 2.133884, address: '1, rue Jean Houdon, 78 000 Versailles ', city: cities['paris'], phone: '01 39 49 78 00', tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_essonne', latitude: 48.627151, longitude: 2.439081, address: "Boulevard de France, 91 000 Évry ", city: cities['paris'], tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_hauts_de_seine', latitude: 48.897717, longitude: 2.217077, address: "167-177 Av. Frédéric et Irène Joliot Curie, 92000 Nanterre ", city: cities['paris'], tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_seine_saint_denis', latitude: 48.909212, longitude: 2.453325, address: '13, rue Marguerite-Yourcenar, 93 000 Bobigny', city: cities['paris'], tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_val_de_marne', latitude: 48.765962, longitude: 2.469639, address: "13/15 Rue Claude Nicolas Ledoux, 94 000 Créteil ", city: cities['paris'], tags: [asylum_demand, ada])
PointOfInterest.create(key: 'guichet_unique_val_doise', latitude: 49.032142, longitude: 2.078303, address: '5, avenue Bernard Hirsch, 95 010 Cergy-Pontoise ', city: cities['paris'], tags: [asylum_demand, ada])
PointOfInterest.create(key: 'centre_pmi_de_la_chapelle', latitude: 48.887295, longitude: 2.358493, address: "5, cité de la Chapelle 75018 Paris", opening_hours: "Du Lundi au Vendredi : de 09h00 à 12h30 de 13h30 à 17h30", city: cities['paris'], website: 'https://lannuaire.service-public.fr/ile-de-france/paris/pmi-75118-06', phone: '01 40 38 85 35', tags: [hc_minor])
PointOfInterest.create(key: 'parcours_dexil', latitude: 48.868559, longitude: 2.369606, address: '12, rue de la Fontaine au Roi 75011 Paris', opening_hours: "Lundi        09:30 – 12:30, 13:30 – 17:30
Mardi        09:30 – 12:30, 13:30 – 17:30
Mercredi   09:30 – 12:30, 13:30 – 17:30
Jeudi        09:30 – 12:30, 13:30 – 17:30
Vendredi  09:30 – 12:30, 13:30 – 17:30
Sdi        09:30 – 12:30, 13:30 – 17:30", city: cities['paris'], website: 'http://www.parcours-exil.org', phone: '01 45 33 31 74', tags: [specialists])
PointOfInterest.create(key: 'hopital_la_pitie_salpetriere', latitude: 48.837206, longitude: 2.365000, address: "83 boulevard de l’hôpital 75013 Paris", city: cities['paris'], website: 'http://pitiesalpetriere.aphp.fr', phone: '01 42 16 00 00', tags: [emergency, specialists])
PointOfInterest.create(key: 'singa_france', latitude: 48.881757, longitude: 2.326833, address: "73 rue d'Amsterdam 75008", opening_hours: "Lundi à Vendredi 10:00 - 17:00", city: cities['paris'], email: 'contact@singa.fr', website: 'www.singa.fr', tags: [cont_associations,
                                                                                                                                                                                                                                                              calm])
PointOfInterest.create(key: 'france_terre_dasile_service_dassistance_sociale_et_administrative_de_paris_sasa', latitude: 48.889474, longitude: 2.358665, address: '4, rue Doudeauville 75018 Paris', opening_hours: "Lundi Mardi Mercredi Vendredi: 9H15/12H45 14H/17H15

Domiciliation pour les nouveaux arrivants : mardi et jeudi 14h-17h15", city: cities['paris'], email: 'sasadom@france-terre-asile.org', website: 'http://www.france-terre-asile.org/accueil/etablissement/sasa-hai-de-paris', phone: '01 53 26 23 80', tags: [cont_associations])
PointOfInterest.create(key: 'cimade', latitude: 48.876757, longitude: 2.386350, address: "25 rue Fessart – 75019 Paris", city: cities['paris'], email: 'infos@lacimade.org', website: 'http://www.lacimade.org/nouvelles', phone: '01 44 18 60 50', tags: [cont_associations])

PointOfInterest.create(key: 'kiosque_france_terre_dasile_emmaus', latitude: 48.880040, longitude: 2.364111, address: '218, rue du faubourg Saint-martin 75010 Paris', city: cities['paris'], tags: [cont_associations])

PointOfInterest.create(key: 'croix_rouge_francaise',  latitude: 48.827410,  longitude: 2.314194, address: '98 Rue Didot 75014 Paris', city: cities['paris'], phone: '01 44 43 11 00', tags: [cont_associations])

PointOfInterest.create(key: 'adoma',  latitude: 48.845350,  longitude: 2.301512,  address: '42 Rue Cambronne 75015 Paris', city: cities['paris'], website: 'http://www.adoma.fr/adoma/Accueil/p-3-Accueil.htm', phone: "Tél. : 01 40 61 42 00", tags: [cont_associations])

PointOfInterest.create(key: 'aurore', latitude: 48.861211,  longitude: 2.349940,  address: "34, boulevard Sébastopol – 75004 Paris ", city: cities['paris'], website: 'http://aurore.asso.fr/', phone: "Tél : 01 73 00 02 30", tags: [cont_associations])

PointOfInterest.create(key: 'resto_du_coeur_10_19eme', latitude: 48.900479, longitude: 2.386914, address: '7/15 Avenue de la Porte de la Villette', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'hopital_ambroise_pare', latitude: 48.849072, longitude:  2.236287, address: "9 Avenue Charles de Gaulle, 92100 Boulogne-Billancourt
48.849072, 2.236287", city: cities['paris'], tags: [pass])
PointOfInterest.create(key: 'hopital_antoine_beclere', latitude: 48.789021, longitude: 2.254634, address: "Espace Côme et Damien
157, rue de la Porte de Trivaux – Clamart 92", opening_hours: "Consultations sans RDV : mardi et vendredi, de 14h à 17h30", city: cities['paris'], tags: [pass])
PointOfInterest.create(key: 'hopital_avicenne', latitude: 48.915334, longitude: 2.424326, address: "Unité Villermé (policlinique médicale)
125, route de Stalingrad – Bobigny 93", opening_hours: "Consultations sans RDV :
- lundi, mercredi et vendredi : 14h – 17h
- mardi et jeudi : 9h – 12h", city: cities['paris'], tags: [pass])
PointOfInterest.create(key: 'hopital_bicetre', latitude: 48.809796, longitude: 2.353069, address: "Policlinique porte 39
78 rue du Général Leclerc – Le Kremlin-Bicêtre 94", opening_hours: "Consultations de médecine uniquement sur RV : lundi, mardi, jeudi : de 9h à 17h
Prise de RDV : 01 45 21 23 71 - 01 45 21 73 30", city: cities['paris'], phone: ' 01 45 21 23 71 - 01 45 21 73 30', tags: [pass])
PointOfInterest.create(key: 'hopital_bichat_claude_bernard', latitude: 48.898308, longitude: 2.332112, address: "46, rue Henri-Huchard – Paris 18e", opening_hours: 'sur rendez-vous du lundi au vendredi', city: cities['paris'], phone: '01 40 25 80 80', tags: [pass])
PointOfInterest.create(key: 'hc_hopital_cochin_port_royal_tarnier', latitude: 48.837441, longitude: 2.338858, address: '27 rue du faubourg Saint-Jacques - Paris 14e', opening_hours: "consultation de médecine générale, sans RDV : mardi, mercredi, jeudi, vendredi : de 9h à 12h", city: cities['paris'], phone: '01 58 41 41 41', tags: [pass, specialists])
PointOfInterest.create(key: 'hopital_cochin_port_royal_tarnier',  latitude: 48.837490, longitude: 2.338880, address: '27 rue du faubourg Saint-Jacques 75014 Paris', city: cities['paris'], website: 'http://www.aphp.fr/permanence-dacces-aux-soins-de-sante-cochin-port-royal-tarnier', tags: [emergency])
PointOfInterest.create(key: 'hopital_corentin_celton',  latitude: 48.827819, longitude: 2.278958, address: '4 parvis Corentin-Celton - Issy-les-Moulineaux (92)', opening_hours: "du lundi au vendredi : 8h30 – 12h30 ; 13h30 – 17h00, avec ou sans rdv", city: cities['paris'], phone: '01 58 00 40 88', tags: [pass])
PointOfInterest.create(key: 'specialist_psy', latitude: 48.797114, longitude:  2.453118, address: "51, avenue du Maréchal de Lattre-de-Tassigny – Créteil 94", opening_hours: "Service social sans rendez-vous, du lundi au vendredi : 9h -12h. L’assistant(e) social(e) fixe le RDV avec le médecin.", city: cities['paris'], phone: "01 49 81 41 80 – 01 49 81 22 82", tags: [pass, specialists])
PointOfInterest.create(key: 'hopital_hotel_dieu', latitude: 48.853989, longitude: 2.348299, address: "1, place du Parvis Notre-Dame – Paris 4e", opening_hours: "Consultations de médecine sans rendez-vous : de 9h à 12h30 et de 14h à 17h30 du lundi au vendredi", city: cities['paris'], phone: "Service social : 01 42 34 88 98 ou 01 42 34 80 77
Médecin : 01 42 34 82 34, 01 42 34 42 51 ou 01 42 34 78 54",  tags: [pass])
PointOfInterest.create(key: 'hopital_jean_verdier', latitude: 48.909790, longitude: 2.489093, address: "Allée du 14 Juillet – Bondy 93", opening_hours: "Polyclinique, consultations sur RDV :
- lundi, mercredi, jeudi : 10h- 12h
- mardi, vendredi : 10h – 16h30

Polyclinique, consultation sans RDV :
- lundi au vendredi, de 9h à 16h30", city: cities['paris'], phone: '- service social : 01 48 02 62 88 ; 01 48 02 63 88 ou 01 48 02 67 88', tags: [pass])
PointOfInterest.create(key: 'hopitaux_lariboisiere_et_fernand_widal', latitude: 48.882279, longitude:  2.352813, address: "Consultation Arc-en-ciel
2, rue Ambroise-Paré – Paris 10e", opening_hours: "Consultations de médecine sans RDV : du lundi au vendredi de 8h00 à 16h00", city: cities['paris'], phone: "Accueil : 01 49 95 81 24
Service social : 01 49 95 81 73 ou 01 49 95 85 65", tags: [pass])
PointOfInterest.create(key: 'hopital_pitie_salpetriere', latitude: 48.837164, longitude: 2.365043, address: "83 boulevard Pitié-Salpêtrière - Paris 13e", opening_hours: "Consultation de médecine générale sans rendez-vous du lundi au vendredi de 9h à 12h30", city: cities['paris'], phone: "- accueil et RDV : 01 42 17 62 62 ou 01 42 17 62 63
- service social : 01 42 17 62 79", tags: [pass])
PointOfInterest.create(key: 'hopital_saint_antoine', latitude: 48.849282, longitude: 2.382620, address: "184, rue du Faubourg Saint-Antoine – Paris 12e", opening_hours: "Consultations de médecine générale : sans rendez-vous du lundi au vendredi de 7 h30 à 18 h", city: cities['paris'], phone: " 01 49 28 21 53 – 01 49 28 21 54", tags: [pass])
PointOfInterest.create(key: 'hopital_saint_louis', latitude: 48.873329, longitude:  2.369787, address: "1, avenue Claude-Vellefaux – Paris 10e", opening_hours: "Consultations de médecine générale : sans RDV du lundi au vendredi : de 8h30 à 12h30, de 14h à 16h", city: cities['paris'], phone: "accueil : 01 42 49 91 30
service social : 01 42 49 41 43 – 01 42 49 48 72", tags: [pass, specialists])
PointOfInterest.create(key: 'hopital_tenon', latitude: 48.865864, longitude: 2.400801, address: '4, rue de la Chine Paris 20', opening_hours: "par le service des urgences (bâtiment BUCA)", city: cities['paris'], phone: "Standard hôpital : 01 56 01 70 00
Service social. : 01 56 01 61 55", tags: [pass])
PointOfInterest.create(key: 'cpam_17eme', latitude: 48.884159, longitude: 2.320164, address: "30 Rue Boursault
75017 Paris", city: cities['paris'])
PointOfInterest.create(key: 'centre_du_psychotrauma_de_linstitut_de_victimologie_de_paris', latitude: 48.888780, longitude: 2.307901, address: '131 rue de Saussure 75017 Paris ', city: cities['paris'], phone: 'Tel. : 01 43 80 44 40 Fax : 01 43 80 44 93', tags: [specialists])
PointOfInterest.create(key: 'ftda_permanence_daccueil_et_dorientation_des_mineurs_isoles_etrangers_paomie', latitude: 48.880997, longitude: 2.369929, address: '127, bd de la Villette 75010 Paris', opening_hours: 'Lundi au vendredi 9H/17H30',      city: cities['paris'], email: 'paomie@france-terre-asile.org', phone: "Tel : 01 40 03 37 58
Fax : 01 42 06 49 26",
                       tags: [hc_minor])
PointOfInterest.create(key: 'datmie_villa_saint_michel_amie_75', latitude: 48.889882, longitude: 2.327997, address: '18 Villa Saint-Michel 75018 Paris', city: cities['paris'], email: 'datmievsm@france-terre-asile.org', phone: "Tel : 01 42 28 00 12
Fax : 01 42 28 49 88",
                       tags: [hc_minor])
PointOfInterest.create(key: 'semna', latitude: 48.843325, longitude: 2.390116, address: '74-76 rue de Reuilly 75012 PARIS ', city: cities['paris'], tags: [hc_minor])
PointOfInterest.create(key: 'croix_rouge_centre_enfants_du_monde', latitude: 48.808692, longitude: 2.361076, address: "21 Place Victor Hugo 94270 Le Kremlin-Bicêtre ", city: cities['paris'], phone: 'Tel:01 42 72 71 78 / fax: 01 45 21 49 76', tags: [hc_minor])
PointOfInterest.create(key: 'antenne_des_mineurs_du_barreau_de_paris', latitude: 48.855056, longitude: 2.345222, address: 'Palais de Justice de Paris - Galerie Marchande, 10 boulevard du palais 75001 PARIS ', opening_hours: "Tous les jeudis, de 14h à 17h, sans rendez-vous", city: cities['paris'], tags: [hc_minor])
PointOfInterest.create(key: 'resto_du_coeur_faidherbe', latitude: 48.851661, longitude: 2.384998, address: '3/5 impasse Cesselin', opening_hours: 'Lundi au jeudi, 13h-16h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'resto_du_coeur_porte_de_vanves', latitude: 48.825690, longitude: 2.302728, address: '10 rue Julia Bartet', opening_hours: 'Lundi au jeudi, 13h30-16h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'resto_du_coeur_vaugirard', latitude: 48.838039, longitude: 2.301519, address: "15-17 rue d'Alleray", opening_hours: 'Lundi au jeudi, 13h-17h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'resto_du_coeur_la_chapelle', latitude: 48.897406,  longitude: 2.361103,  address: "11 rue du Pré", opening_hours: 'Lundi, mardi, jeudi 8h30-12h et 13h-16h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'resto_du_coeur_la_vilette',  latitude: 48.899307,  longitude: 2.387155,  address: '7-15 avenue de la Porte de la Villette', opening_hours: 'Lundi au vendredi 9h30-12h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'resto_du_coeur_place_des_fetes', latitude: 48.873961, longitude: 2.395373, address: '29 rue du Soleil', opening_hours: 'Lundi, mardi, jeudi, vendredi 13h30-16h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'porte_ouverte_et_solidarite', latitude: 48.823739, longitude: 2.377171, address: '27 av de la Porte de Vitry', opening_hours: "Mardi, jeudi, vendredi 10h-15h, fermé aout", city: cities['paris'], phone: 'tel : 0144238593', tags: [meals_of_the_world])
PointOfInterest.create(key: 'marche_solidaire', latitude: 48.832656, longitude: 2.321816, address: "12 rue de l'Eure", city: cities['paris'], phone: 'tel : 0183897830', tags: [meals_of_the_world])
PointOfInterest.create(key: 'corot_entraide', latitude: 48.847092, longitude: 2.270054, address: '4 rue Corot', opening_hours: "Mardi, mercredi 9h30-12h, fermé juillet, août et vacances scolaires et jours fériés", city: cities['paris'], phone: 'tel : 0145245446', tags: [meals_of_the_world])
PointOfInterest.create(key: 'entraide_de_leglise_reformee', latitude: 48.861924, longitude:  2.280425, address: '19 rue de Cortambert', opening_hours: "Jeudi 12h-16h30 fermé juillet août et vacances scolaires", city: cities['paris'], phone: 'tel : 0145034310', tags: [meals_of_the_world])
PointOfInterest.create(key: 'entraide_de_passy', latitude: 48.855869, longitude: 2.280633, address: "4 rue de l’Annonciation", opening_hours: 'Mardi 9h30-11h30', city: cities['paris'], phone: 'tel : 0144301050', tags: [meals_of_the_world])
PointOfInterest.create(key: 'amitie_vilette_epicerie_solidaire', latitude: 48.889362, longitude: 2.380355,  address: '3 place de Joinville', opening_hours: 'Vendredi 14h30-17h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'la_courte_echelle', latitude: 48.895720, longitude: 2.373404, address: '8 rue Gaston Tessier', opening_hours: 'Lundi au vendredi', city: cities['paris'], phone: 'tel : 0140382264', tags: [meals_of_the_world])
PointOfInterest.create(key: 'magalimenil_menilmontant', latitude: 48.868560, longitude: 2.387277, address: "4­-6 rue d'Eupatoria", opening_hours: "Mardi 14h-16h30 (sur orientation d'une assistante sociale)", city: cities['paris'], phone: 'tel : 0640129581', tags: [meals_of_the_world])
PointOfInterest.create(key: 'resto_du_coeur_pyramide',  latitude: 48.866065,
                       longitude: 2.332744,  address: "24, rue Saint­ Roch", opening_hours: 'Lundi au vendredi 19h30-20h45', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'restaurant_solidaire', latitude: 48.851337, longitude: 2.344885, address: '3 rue Boutebrie', opening_hours: '17h15-19h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'soupe_populaire', latitude: 48.852607,  longitude: 2.336408, address: "4 rue clément", opening_hours: "Du 16 septembre au 13 juillet, lundi au samedi 11h45-12h45, ticket à partir de 10h", city: cities['paris'], phone: 'tel : 0143545641', tags: [meals_of_the_world])
PointOfInterest.create(key: 'restaurant_solidaire_europe', latitude: 48.877235, longitude: 2.313912,  address: '11 rue de Maleville', opening_hours: 'Lundi au samedi 18h-20h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'solidarite_soupe_trinite', latitude: 48.877291, longitude: 2.331400, address: "Place d'Estienne d'Orves", opening_hours: "De mi-octobre à mi-juin, sauf vacances scolaires d'hiver et de printemps, lundi mardi jeudi et vendredi 12h45-13h30, dans la Crypte", city: cities['paris'], phone: 'tel : 0148741277', tags: [meals_of_the_world])
PointOfInterest.create(key: 'repas_saint_lazare', latitude: 48.877225, longitude: 2.327243, address: 'Place de Budapest', opening_hours: 'lundi, mardi, vendredi 20h',      city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'restaurant_vellefaux', latitude: 48.877065, longitude: 2.370447, address: '66, avenue Claude Vellefaux', opening_hours: "17h15-19h30, demander une carte d'accès au Centre d'Action Sociale", city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'fondation_de_larmee_du_salut', latitude: 48.881640,  longitude: 2.361997, address: '12 rue Phillipe de Girard', opening_hours: 'Tous les soirs 19H',      city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'mission_evangelique_parmi_les_sans_logis', latitude: 48.874004, longitude: 2.372282, address: '22 rue Sainte Marthe', opening_hours: "Petits déjeuners du mardi au vendredi 9h30-10h30, dimanche à 10h. Repas du mardi au vendredi 17h et 18h, samedi à 11h30", city: cities['paris'], phone: 'tel : 0142413013 ou 0954176230', tags: [meals_of_the_world])
PointOfInterest.create(key: 'repas_chaud_gare_de_lest', latitude: 48.876603, longitude: 2.362273, address: "Gare de l'Est, entrée avenue de verdun", opening_hours: 'Lundi, mardi, vendredi 20h, dimanche 19h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'soeurs_missionnaires_de_la_charite', latitude: 48.864774, longitude: 2.371453,  address: "60 rue de la Folie Méricourt", opening_hours: 'Tous les jours sauf jeudi 9h-11h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'chanzy_repas_solidaire', latitude: 48.852402,  longitude: 2.382496, address: '6 rue de Chanzy', opening_hours: 'Lundi au samedi 17h15-19h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'repas_chaud',  latitude: 48.855358, longitude: 2.370653, address: '18 boulevard richard lenoir', opening_hours: 'Mardi, jeudi, samedi 20h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'halte_jeunes_16_25_association_aurore', latitude: 48.839678, longitude: 2.381690, address: '15 Rue Henri Desgranges', opening_hours: "Déjeuners 11h45-12h45 du lundi au vendredi", city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'association_des_oeuvres_de_la_mie_de_pain', latitude: 48.825114, longitude: 2.351461, address: '18 rue Charles Fourrier', opening_hours: "Tous les soirs 17h30, du 15 octobre au 31 mars demander un titre d'accès au réfectoire ", city: cities['paris'], phone: 'Tel : 0145894938', tags: [meals_of_the_world])
PointOfInterest.create(key: 'restos_du_coeur', latitude: 48.835314, longitude: 2.369652, address: '53 Boulevard Vincent Auriol', opening_hours: "Du lundi au vendredi de 11h à 13h", city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'repas_salpetriere', latitude: 48.840874, longitude: 2.363318, address: 'Square Marie Curie', opening_hours: 'Jeudi 20h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'restaurant_solidaire_artiste', latitude: 48.841898, longitude: 2.325807, address: '57 rue du Montparnasse', opening_hours: "Du lundi au samedi de 17h15 à 19h30", city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'repas_denfert_rochereau', latitude: 48.834158,  longitude: 2.336412, address: "Place de l'Ile Saint croisement Boulevard Arago", opening_hours: 'lundi mardi mercredi vendredi 20H et dimanche 19h30',     city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'equipes_saint_vincent_les_perichaux', latitude: 48.829828, longitude: 2.300591,  address: "41 rue de Périchaux", opening_hours: 'Jeudi 12h30',     city: cities['paris'],      phone: 'Tel : 0148284676',  tags: [meals_of_the_world])
PointOfInterest.create(key: 'equipe_saint_vincent_saint_christophe_de_javel', latitude: 48.843907, longitude: 2.278982, address: "12 rue Léontine", opening_hours: 'Lundi mardi mercredi vendredi 10h-12h', city: cities['paris'], phone: 'Tel : 0145547393', tags: [meals_of_the_world])
PointOfInterest.create(key: 'les_epinettes', latitude: 48.896388, longitude: 2.323404, address: '51 rue des Epinettes', opening_hours: 'Lundu au samedi 17h15-19h30', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'solidarite_chretiene_des_batignolles', latitude: 48.882784, longitude: 2.322818, address: '44 boulevard des Batignolles', opening_hours: 'mardi jeudi samedi 12h inscription le jeudi 10h30-11h45', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'centre_israelite_de_montmartre', latitude: 48.887519, longitude: 2.345212, address: '21 Rue Paul Albert', opening_hours: 'Du lundi au vendredi 12h-12h45 et 18h-18h45', city: cities['paris'], phone: 'Tel : 0146062435', tags: [meals_of_the_world])
PointOfInterest.create(key: 'une_chorba_pour_tous', latitude: 48.895911, longitude: 2.378236, address: '108 Rue Curial', opening_hours: 'Du lndi au vendredi 18h', city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'reservoir', latitude: 48.869142, longitude: 2.407501, address: '24 rue de la Justice', opening_hours: "Du lundi au samedi de 17h15 à 19h30", city: cities['paris'], tags: [meals_of_the_world])
PointOfInterest.create(key: 'caf_centre_de_gestion_de_finlay', latitude: 48.851269, longitude: 2.291037, address: '50 rue du Docteur Finlay, 75015 PARIS ', opening_hours: 'lundi-vendr 8H30-16H30, sauf mercr. ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_de_gestion_de_la_chapelle', latitude: 48.893939, longitude: 2.359119, address: '47 rue de la Chapelle 75018 Paris ', opening_hours: 'lundi-vendr 8H30-16H30, sauf mercr. ',      city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_de_gestion_de_laumiere',  latitude: 48.884902,  longitude: 2.377158,  address: "67-69 avenue Jean Jaurès 75019 Paris ", opening_hours: 'lundi-vendr 8H30-16H30, sauf mercr', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_de_gestion_de_nationale', latitude: 48.828315,  longitude: 2.365481,  address: '101 rue Nationale 75013 PARIS ', opening_hours: 'lundi-vendr 8H30-16H30, sauf mercr', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_social_belliard', latitude: 48.896078, longitude: 2.333584, address: '145 rue Belliard 75018 Paris ', opening_hours: 'lundi-vendredi 9h-12h30 et 13h30-17h30 ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_social_charenton',  latitude: 48.834842,  longitude: 2.394654,  address: '295 rue de Charenton 75012 Paris', opening_hours: 'lundi-vendredi 9h-12h30 et 13h30-17h30 ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_social_chevaleret', latitude: 48.825974,  longitude: 2.376558,  address: "1-3 rue Eugène Oudiné, 75013 Paris", opening_hours: 'lundi-vendredi 9h-12h30 et 13h30-17h30 ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_social_dannam', latitude: 48.866184, longitude: 2.394076, address: "4 rue d’Annam, 75020 PARIS", opening_hours: 'lundi-vendredi 9h-12h30 et 13h30-18h ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_social_de_tanger', latitude: 48.888369, longitude: 2.370864, address: '28 rue de Tanger 75019 Paris', opening_hours: 'lundi-vendredi 9h-12h30 et 13h30-17h30 ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'caf_centre_social_toussaregaud', latitude: 48.820983, longitude: 2.372242, address: "21 avenue Claude Régaud 75013 Paris", opening_hours: 'lundi-vendredi 9h-12h30 et 13h30-17h30 ', city: cities['paris'], tags: [welfare_and_family_benefits, rsa])
PointOfInterest.create(key: 'pole_emploi_agence_paris_1_2_3_4eme_paul_lelong',  latitude: 48.867868,  longitude: 2.343228,  address: '4 rue paul lelong 75002 Paris', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_6_et_14eme_jean_moulin',  latitude: 48.826139,  longitude:  2.324719, address: '9 rue friant 75014 Paris ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_5_et_13eme_daviel', latitude: 48.828021, longitude: 2.344404, address: '27 rue daviel 75013 Paris', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_20eme_vitruve', latitude: 48.858886, longitude: 2.406307, address: '60 rue vitruve 75020 Paris ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ',     city: cities['paris'],        tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_18eme_ney', latitude: 48.898685, longitude: 2.353254, address: '78 boulevard ney 75018 Paris  ',  opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ',     city: cities['paris'],        tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_19eme_armand_carrel', latitude: 48.882814, longitude: 2.376168, address: '44 rue armand carrel 75019 Paris ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ',     city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_12eme_diderot', latitude: 48.845581, longitude: 2.369050, address: '3 boulevard diderot 75012 Paris  ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ',     city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_7_8_9eme_st_petersbourg', latitude: 48.882474, longitude: 2.326341, address: '34 rue saint petersbourg 75008 Paris ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_16_et_17eme_cardinet', latitude: 48.892561, longitude: 2.314960, address: '8 rue bernard buffet 75017 Paris  ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_20eme_piat', latitude: 48.872811, longitude: 2.383407, address: '51 rue piat 75020 Paris ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_11eme_beaumarchais', latitude: 48.859815, longitude: 2.369902, address: "11 rue pelée 75011 Paris ", opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'],        tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_19eme_laumiere',  latitude: 48.885216,  longitude: 2.377937,  address: '75 avenue jean jaures 75019 Paris', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_15eme_brancion',  latitude: 48.835714,  longitude: 2.305810,  address: '10 rue brancion 75015 Paris  ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_18eme_genevoix',  latitude: 48.894199,  longitude: 2.359602,  address: '11 rue maurice genevoix 75018 Paris', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_paris_10eme_saint_louis', latitude: 48.876075, longitude: 2.371158, address: '20 rue vicq d azir 75010 Paris ', opening_hours: 'Lundi-jeudi 9H-17H, vendr 9H-12H ', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_chaumont', latitude: 48.097617,  longitude: 5.143475, address: '22 rue jules cheret 52000 Chaumont ', opening_hours: 'Lundi-vendredi 8H30-12H30', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_chalons_en_champagne', latitude: 48.964829, longitude: 4.363543, address: "71 avenue de la deuxieme division blindee 51000 Châlons-en-Champagne", opening_hours: 'Lundi-vendredi 8H30-12H30', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_autun', latitude: 46.958786,  longitude: 4.299547,  address: 'rue eugene chevalier 71400 Autun ', opening_hours: 'lundi-vendr 8H30-12H30', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'pole_emploi_agence_berck', latitude: 50.398202,  longitude: 1.579060,  address: '2 chemin des pourrieres 62600 Berck ', opening_hours: 'Lundi-jeudi 8H30-16H30, vendr 9H-12H', city: cities['paris'], tags: [job])
PointOfInterest.create(key: 'universite_paris_1_pantheon_sorbonne', latitude: 48.847100, longitude: 2.344457, address: '3 Rue Cujas 75005 Paris', city: cities['paris'], website: 'http://www.univ-paris1.fr/en/international/accueil-des-etudiants-refugies/', phone: '00 33 1 44 07 80 00', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_10_nanterre_la_defense', latitude: 48.902926, longitude: 2.211460, address: "200 Avenue de la République, 92000 Nanterre, France", city: cities['paris'], website: 'https://www.u-paris10.fr/l-universite/accueil-des-refugies-l-universite-de-nanterre-s-engage-concretement-626584.kjsp', phone: '0033 1 40 97 72 00', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_2_pantheon_assas', latitude: 48.843487, longitude: 2.333445, address: "94 Rue d'Assas
75006 Paris, France", city: cities['paris'], website: 'http://www.u-paris2.fr/27662109/0/fiche___pagelibre/&RH=INTERNATIONAL', phone: '0033 1 44 41 57 00',
                       tags: [education_rights])
PointOfInterest.create(key: 'university_paris_3_sorbonne_nouvelle', latitude: 48.839952, longitude: 2.353924, address: 'Rue de la Clef, Paris, France', city: cities['paris'], website: 'http://www.univ-paris3.fr/comment-deposer-une-candidature-en-1ere-annee-de-licence--19091.kjsp?STNAV=&RUBNAV=&RH=1179926140829', phone: '0033 1 45 87 40 00', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_4_paris_sorbonne',  latitude: 48.848456,  longitude: 2.342788,  address: '1 Rue Victor Cousin, 75005 Paris, France', city: cities['paris'], website: 'http://www.paris-sorbonne.fr/europe', phone: '0033 1 40 46 26 14', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_5_paris_descartes', latitude: 48.851286,  longitude: 2.340678,  address: "12 Rue de l'École de Médecine
75006 Paris, France", city: cities['paris'], website: 'https://www.univ-paris5.fr/FORMATION/Inscriptions/Modalites-d-inscription-a-l-universite-Paris-Descartes/Etudiant-etranger', phone: '0033 1 40 46 16 16', tags: [education_rights])
PointOfInterest.create(key: 'univertity_paris_6_pierre_et_marie_curie', latitude: 48.844792, longitude: 2.343840, address: '11 Rue Pierre et Marie Curie, 75005 Paris, France', city: cities['paris'], website: 'http://www.upmc.fr/fr/formations/inscriptions_scolarite.html', phone: '0033 1 43 25 23 02', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_7_paris_diderot', latitude: 48.829659, longitude: 2.380537, address: '5 Rue Thomas Mann, 75013 Paris, France', city: cities['paris'], website: 'http://www.univ-paris-diderot.fr/sc/site.php?bc=inscriptions&np=Candidat_inscriptions&g=m', phone: '0033 1 57 27 57 27', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_8_saint_denis', latitude: 48.945898, longitude: 2.363236, address: "4 Rue Guynemer
93200 Saint-Denis, France", city: cities['paris'], website: 'http://www.univ-paris8.fr/-INSCRIPTIONS-91-', phone: '0033 1 49 40 67 89', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_9_dauphine', latitude: 48.870234, longitude: 2.273451, address: "Place du Maréchal de Lattre de Tassigny, 75016 Paris, France", city: cities['paris'], website: 'http://www.dauphine.fr/fr/formations-et-diplomes/candidater-a-dauphine/candidater-en-premiere-annee-a-dauphine-paris/bacheliers-titulaires-dun-baccalaureat-etranger.html', phone: '0033 1 44 05 44 05',
                       tags: [education_rights])
PointOfInterest.create(key: 'university_paris_11_paris_sud', latitude: 48.697876, longitude: 2.176505, address: '15 Rue Georges Clemenceau, 91400 Orsay, France',        city: cities['paris'], website: 'http://www.u-psud.fr/fr/vie-etudiante/inscriptions.html', phone: '0033 1 69 15 67 50', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_12_val_de_marne', latitude: 48.795178,  longitude: 2.443680,  address: "71 Rue Saint-Simon, 94000 Créteil, France", city: cities['paris'], website: 'http://www.u-pec.fr/etudiant/inscriptions/etudiant-s-inscrire-a-l-upec-375755.kjsp',  phone: '0033 1 45 17 03 55', tags: [education_rights])
PointOfInterest.create(key: 'university_paris_13_villeteneuse', latitude: 48.956180,  longitude: 2.341568,  address: "99 Avenue Jean Baptiste Clément, 93430 Villetaneuse, France", city: cities['paris'], website: 'http://www.iutv.univ-paris13.fr/etudiant-etranger.html', phone: '0033 1 49 40 30 00',
                       tags: [education_rights])
PointOfInterest.create(key: 'university_paris_est_marne_la_vallee', latitude: 48.839259, longitude: 2.587095, address: '5 Boulevard Descartes, 77420 Champs-sur-Marne, France', city: cities['paris'], website: 'http://www.u-pem.fr/inscription-et-scolarite/portail-des-inscriptions/', phone: '0033 1 60 95 75 00', tags: [education_rights])
