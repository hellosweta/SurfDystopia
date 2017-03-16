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

ActiveRecord::Schema.define(version: 20170316165719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer  "host_id",       null: false
    t.string   "title",         null: false
    t.float    "longitude",     null: false
    t.float    "latitude",      null: false
    t.string   "image_url",     null: false
    t.text     "description",   null: false
    t.integer  "region_id",     null: false
    t.integer  "max_guests"
    t.string   "property_type"
    t.text     "house_rules"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["host_id"], name: "index_listings_on_host_id", using: :btree
    t.index ["latitude"], name: "index_listings_on_latitude", unique: true, using: :btree
    t.index ["longitude"], name: "index_listings_on_longitude", unique: true, using: :btree
  end

  create_table "regions", force: :cascade do |t|
    t.string   "city",       null: false
    t.string   "state",      null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "name",               null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.text     "about_me"
    t.string   "image_url"
    t.integer  "region_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end