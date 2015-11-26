# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151126152532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "country_id"
  end

  add_index "cities", ["key"], name: "index_cities_on_key", unique: true, using: :btree

  create_table "countries", force: :cascade do |t|
    t.string   "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "countries", ["key"], name: "index_countries_on_key", unique: true, using: :btree

  create_table "points_of_interest", force: :cascade do |t|
    t.string   "key"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "address"
    t.json     "contact"
    t.json     "opening_hours"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "city_id"
  end

  add_index "points_of_interest", ["city_id"], name: "index_points_of_interest_on_city_id", using: :btree
  add_index "points_of_interest", ["key"], name: "index_points_of_interest_on_key", unique: true, using: :btree

  create_table "points_of_interest_tags", id: false, force: :cascade do |t|
    t.integer "point_of_interest_id", null: false
    t.integer "tag_id",               null: false
  end

  add_index "points_of_interest_tags", ["point_of_interest_id"], name: "index_points_of_interest_tags_on_point_of_interest_id", using: :btree
  add_index "points_of_interest_tags", ["tag_id"], name: "index_points_of_interest_tags_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "key"
    t.integer  "sortno"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "parent_id"
  end

  add_index "tags", ["key"], name: "index_tags_on_key", unique: true, using: :btree

  create_table "user_statuses", force: :cascade do |t|
    t.string   "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_statuses", ["key"], name: "index_user_statuses_on_key", unique: true, using: :btree

  add_foreign_key "points_of_interest", "cities"
  add_foreign_key "tags", "tags", column: "parent_id"
end
