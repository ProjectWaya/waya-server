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

ActiveRecord::Schema.define(version: 20151128094125089721) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree

  create_table "audits", force: :cascade do |t|
    t.integer  "auditable_id"
    t.string   "auditable_type"
    t.integer  "associated_id"
    t.string   "associated_type"
    t.integer  "user_id"
    t.string   "user_type"
    t.string   "username"
    t.string   "action"
    t.text     "audited_changes"
    t.integer  "version",         default: 0
    t.string   "comment"
    t.string   "remote_address"
    t.string   "request_uuid"
    t.datetime "created_at"
  end

  add_index "audits", ["associated_id", "associated_type"], name: "associated_index", using: :btree
  add_index "audits", ["auditable_id", "auditable_type"], name: "auditable_index", using: :btree
  add_index "audits", ["created_at"], name: "index_audits_on_created_at", using: :btree
  add_index "audits", ["request_uuid"], name: "index_audits_on_request_uuid", using: :btree
  add_index "audits", ["user_id", "user_type"], name: "user_index", using: :btree

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

  add_index "tags", ["key", "parent_id"], name: "index_tags_on_key_and_parent_id", unique: true, using: :btree

  create_table "translation_center_categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "translation_center_translation_keys", force: :cascade do |t|
    t.string   "name"
    t.integer  "category_id"
    t.datetime "last_accessed"
    t.string   "en_status",     default: "untranslated"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "translation_center_translation_keys", ["name"], name: "index_translation_center_translation_keys_on_name", using: :btree

  create_table "translation_center_translations", force: :cascade do |t|
    t.integer  "translation_key_id"
    t.text     "value"
    t.string   "lang"
    t.integer  "translator_id"
    t.string   "translator_type"
    t.string   "status",             default: "pending"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "translation_center_translations", ["translation_key_id"], name: "index_translation_center_translations_on_translation_key_id", using: :btree

  create_table "user_statuses", force: :cascade do |t|
    t.string   "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_statuses", ["key"], name: "index_user_statuses_on_key", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
  add_index "votes", ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree

  add_foreign_key "points_of_interest", "cities"
  add_foreign_key "tags", "tags", column: "parent_id"
end
