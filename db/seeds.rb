# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# $.ajax({
#     method: 'GET',
#     url: '/api/user/5'
# })




User.destroy_all
Route.destroy_all
Location.destroy_all
Workout.destroy_all

# User Helper Methods

def random_yankees_date
    dates = ["2009-11-4", "2000-10-26", "1999-10-27", "1998-10-21", "1996-10-26"]
    dates.sample
end

def random_gender
    gender = ["M","F","Other"]
    gender.sample
end

# Users

user1 = User.create!(
    username: "demo", 
    password: "password", 
    fname: "Edward", 
    lname: "Trinidad", 
    birthday: "1996-10-26", 
    gender: "M", 
    location: 10032 )

user2 = User.create!(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user3 = User.create!(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user4 = User.create!(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user5 = User.create!(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user6 = User.create!(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )
    
p "Users Done"

### Route Helper Methods
users_array = [ user1, user2, user3, user4, user5, user6 ]
activity_type = ["ride", "run"]
route_type = ["road", "MTB", "cyclocross", "road", "trail"]
thumbnail_sample = "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.76135,-73.98195000000001&markers=label:E%7C40.751990000000006,-73.89285000000001&path=color:0x000033ff|weight:2|enc:mexwFdrpbMdBuF~@wCiAs@sAy@yE_Dl@qBhAoDvEaOjCiIzHqVdEsMpEqNyFwDiGcEiD{BaAq@OKBR@Je@pAMV]`AS|@BDFETg@dBmF~@sC^aAfAgDr@sBhBsFdE_MpCyIrK}[`Pcf@|DuL@MGIFWTo@RU`AgDtAgE`@mAOKwEiEmCgC_BsAqBeByCqCmB{AiBuAqFeEy[gViOgLuKiItC}HlA_DFQ?Mt@qBrAqDjH}RvC_IfJeW|EyMDKPObAqCxA_EVs@Hk@CmAGuA[oGUaEm@{LI_Bv@IlCYzBYfBQhLoApFi@Cc@MwCc@oIQyCCUASH]U}Dy@oPv@C`Ee@h@GGgAECqBR&key=AIzaSyBRXhwNmYap2xKSxbvvczBY9INFdiAXtEE"
    
def user_id_generator(array)
    array.sample
end

def activity_type_generator(array)
    array.sample
end

def route_type_generator(array)
    array.sample
end

# Routes


routeSeed1 = Route.create!(
    user_id: user1.id,
    name: "6 Mile Slough",
    description: "A nature walk",
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: "run",
    route_type: "road",
    thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.76135,-73.98195000000001&markers=label:E%7C40.751990000000006,-73.89285000000001&path=color:0x000033ff|weight:2|enc:mexwFdrpbMdBuF~@wCiAs@sAy@yE_Dl@qBhAoDvEaOjCiIzHqVdEsMpEqNyFwDiGcEiD{BaAq@OKBR@Je@pAMV]`AS|@BDFETg@dBmF~@sC^aAfAgDr@sBhBsFdE_MpCyIrK}[`Pcf@|DuL@MGIFWTo@RU`AgDtAgE`@mAOKwEiEmCgC_BsAqBeByCqCmB{AiBuAqFeEy[gViOgLuKiItC}HlA_DFQ?Mt@qBrAqDjH}RvC_IfJeW|EyMDKPObAqCxA_EVs@Hk@CmAGuA[oGUaEm@{LI_Bv@IlCYzBYfBQhLoApFi@Cc@MwCc@oIQyCCUASH]U}Dy@oPv@C`Ee@h@GGgAECqBR&key=AIzaSyBRXhwNmYap2xKSxbvvczBY9INFdiAXtEE"
)

routeSeed2 = Route.create!(
    user_id: user1.id,
    name: "Eco Park",
    description: "Kayak Pier",
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: "run",
    route_type: "road",
    thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.76135,-73.98195000000001&markers=label:E%7C40.751990000000006,-73.89285000000001&path=color:0x000033ff|weight:2|enc:mexwFdrpbMdBuF~@wCiAs@sAy@yE_Dl@qBhAoDvEaOjCiIzHqVdEsMpEqNyFwDiGcEiD{BaAq@OKBR@Je@pAMV]`AS|@BDFETg@dBmF~@sC^aAfAgDr@sBhBsFdE_MpCyIrK}[`Pcf@|DuL@MGIFWTo@RU`AgDtAgE`@mAOKwEiEmCgC_BsAqBeByCqCmB{AiBuAqFeEy[gViOgLuKiItC}HlA_DFQ?Mt@qBrAqDjH}RvC_IfJeW|EyMDKPObAqCxA_EVs@Hk@CmAGuA[oGUaEm@{LI_Bv@IlCYzBYfBQhLoApFi@Cc@MwCc@oIQyCCUASH]U}Dy@oPv@C`Ee@h@GGgAECqBR&key=AIzaSyBRXhwNmYap2xKSxbvvczBY9INFdiAXtEE"
)

routeSeed3 = Route.create!(
    user_id: user1.id,
    name: "Disney Springs",
    description: "Entertainment and Retail shopping area",
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: "ride",
    route_type: "cyclocross",
    thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C40.76135,-73.98195000000001&markers=label:E%7C40.751990000000006,-73.89285000000001&path=color:0x000033ff|weight:2|enc:mexwFdrpbMdBuF~@wCiAs@sAy@yE_Dl@qBhAoDvEaOjCiIzHqVdEsMpEqNyFwDiGcEiD{BaAq@OKBR@Je@pAMV]`AS|@BDFETg@dBmF~@sC^aAfAgDr@sBhBsFdE_MpCyIrK}[`Pcf@|DuL@MGIFWTo@RU`AgDtAgE`@mAOKwEiEmCgC_BsAqBeByCqCmB{AiBuAqFeEy[gViOgLuKiItC}HlA_DFQ?Mt@qBrAqDjH}RvC_IfJeW|EyMDKPObAqCxA_EVs@Hk@CmAGuA[oGUaEm@{LI_Bv@IlCYzBYfBQhLoApFi@Cc@MwCc@oIQyCCUASH]U}Dy@oPv@C`Ee@h@GGgAECqBR&key=AIzaSyBRXhwNmYap2xKSxbvvczBY9INFdiAXtEE"
)

route1 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type),
    thumbnail: thumbnail_sample
)

route2 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type),
    thumbnail: thumbnail_sample
)

route3 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type),
    thumbnail: thumbnail_sample
)

route4 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type),
    thumbnail: thumbnail_sample
)

route5 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type),
    thumbnail: thumbnail_sample
)

route6 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type),
    thumbnail: thumbnail_sample
)
    
p "Routes Done"


### Locations Helper Methods
routes_array = [ route1, route2, route3, route4, route5, route6 ]
lat_array = [40.7362791, 40.7849787, 40.7086572, 40.6357491, 40.842879]
lng_array = [-73.9941211 , -73.9640486 , -73.9074611, -74.0008724, -73.893037]

def route_id_generator(array)
    array.sample
end

def lat_generator(array)
    array.sample
end

def lng_generator(array)
    array.sample
end


#
#  id         :bigint           not null, primary key
#  route_id   :integer          not null
#  sequence   :integer          not null
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

locationSeed1 = Location.create!(
    route_id: routeSeed1.id, 
    sequence: 1, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
locationSeed2 = Location.create!(
    route_id: routeSeed1.id, 
    sequence: 2, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
locationSeed3 = Location.create!(
    route_id: routeSeed1.id, 
    sequence: 3, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)

location1 = Location.create!(
    route_id: route_id_generator(routes_array).id, 
    sequence: 1, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
location2 = Location.create!(
    route_id: route_id_generator(routes_array).id, 
    sequence: 2, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
location3 = Location.create!(
    route_id: route_id_generator(routes_array).id, 
    sequence: 3, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
location4 = Location.create!(
    route_id: route_id_generator(routes_array).id, 
    sequence: 4, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
location5 = Location.create!(
    route_id: route_id_generator(routes_array).id, 
    sequence: 5, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)
location6 = Location.create!(
    route_id: route_id_generator(routes_array).id, 
    sequence: 5, 
    lat: lat_generator(lat_array), 
    lng: lng_generator(lng_array)
)

p "Locations Done"

# Workouts

#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  name          :string           not null
#  description   :text
#  distance      :float            not null
#  time          :integer          not null
#  elevation     :integer          not null
#  activity_type :string           not null
#  date_created  :date
#  created_at    :datetime         not null
#  updated_at    :datetime         not null

## Workout Helper Methods
workout_activity_type = ["run", "ride", "hike", "walk"]

# def activity_type_generator(array)
#     array.sample
# end

workoutSeed1 = Workout.create!(
    user_id: user1.id,
    name: Faker::Games::Pokemon.location + " Tour",
    description: Faker::Movies::HarryPotter.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(workout_activity_type),
    date_created: random_yankees_date,
)

workoutSeed2 = Workout.create!(
    user_id: user1.id,
    name: Faker::Games::Pokemon.location + " Tour",
    description: Faker::Movies::HarryPotter.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(workout_activity_type),
    date_created: random_yankees_date,
)

workoutSeed3 = Workout.create!(
    user_id: user1.id,
    name: Faker::Games::Pokemon.location + " Tour",
    description: Faker::Movies::HarryPotter.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(workout_activity_type),
    date_created: random_yankees_date,
)

workoutSeed4 = Workout.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::Pokemon.location + " Tour",
    description: Faker::Movies::HarryPotter.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(workout_activity_type),
    date_created: random_yankees_date,
)

workoutSeed5 = Workout.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::Pokemon.location + " Tour",
    description: Faker::Movies::HarryPotter.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(workout_activity_type),
    date_created: random_yankees_date,
)

workoutSeed6 = Workout.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::Pokemon.location + " Tour",
    description: Faker::Movies::HarryPotter.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(workout_activity_type),
    date_created: random_yankees_date,
)

p "Workouts Done"

# location = Location.create!(
#     route_id: route_id_generator(routes_array).id, 
#     sequence: nil, 
#     lat: lat_generator(lat_array), 
#     lng: lng_generator(lng_array)
# )

# route = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
    # thumbnail: thumbnail_sample

# )
# route = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type)
# )
    
    
    # {
    # username: "Matantan", 
    # password: "password", 
    # fname: "Aaron", 
    # lname: "Torres", 
    # birthday: "1990-09-28", 
    # gender: "M", 
    # location: 10014
    # }


p "Seeds Done"






## Heroku Seeds
# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# # $.ajax({
# #     method: 'GET',
# #     url: '/api/user/5'
# # })




# User.destroy_all
# Route.destroy_all

# # User Helper Methods

# def random_yankees_date
#     dates = ["2009-11-4", "2000-10-26", "1999-10-27", "1998-10-21", "1996-10-26"]
#     dates.sample
# end

# def random_gender
#     gender = ["M","F","Other"]
#     gender.sample
# end

# # Users

# user1 = User.create!(
#     username: "demo", 
#     password: "password", 
#     fname: "Edward", 
#     lname: "Trinidad", 
#     birthday: "1996-10-26", 
#     gender: "M", 
#     location: 10032 )

# # user2 = User.create!(
# #     username: Faker::Esport.player, 
# #     password: "password", 
# #     fname: Faker::Name.first_name, 
# #     lname: Faker::Name.last_name, 
# #     birthday: random_yankees_date, 
# #     gender: random_gender, 
# #     location: Faker::Address.zip_code.to_i )

# # user3 = User.create!(
# #     username: Faker::Esport.player, 
# #     password: "password", 
# #     fname: Faker::Name.first_name, 
# #     lname: Faker::Name.last_name, 
# #     birthday: random_yankees_date, 
# #     gender: random_gender, 
# #     location: Faker::Address.zip_code.to_i )

# # user4 = User.create!(
# #     username: Faker::Esport.player, 
# #     password: "password", 
# #     fname: Faker::Name.first_name, 
# #     lname: Faker::Name.last_name, 
# #     birthday: random_yankees_date, 
# #     gender: random_gender, 
# #     location: Faker::Address.zip_code.to_i )

# # user5 = User.create!(
# #     username: Faker::Esport.player, 
# #     password: "password", 
# #     fname: Faker::Name.first_name, 
# #     lname: Faker::Name.last_name, 
# #     birthday: random_yankees_date, 
# #     gender: random_gender, 
# #     location: Faker::Address.zip_code.to_i )

# # user6 = User.create!(
# #     username: Faker::Esport.player, 
# #     password: "password", 
# #     fname: Faker::Name.first_name, 
# #     lname: Faker::Name.last_name, 
# #     birthday: random_yankees_date, 
# #     gender: random_gender, 
# #     location: Faker::Address.zip_code.to_i )
    
# p "Users Done"

# # Route Helper Methods
# # users_array = [ user1, user2, user3, user4, user5, user6 ]
# # activity_type = ["ride", "run"]
# # route_type = ["road", "MTB", "cyclocross", "road", "trail"]
# # thumbnail_sample = "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
    
# def user_id_generator(array)
#     array.sample
# end

# def activity_type_generator(array)
#     array.sample
# end

# def route_type_generator(array)
#     array.sample
# end

# # Routes


# routeSeed1 = Route.create!(
#     user_id: user1.id,
#     name: "6 Mile Slough",
#     description: "A nature walk",
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: "run",
#     route_type: "road",
#     thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
# )

# routeSeed2 = Route.create!(
#     user_id: user1.id,
#     name: "Eco Park",
#     description: "Kayak Pier",
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: "run",
#     route_type: "road",
#     thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
# )

# routeSeed3 = Route.create!(
#     user_id: user1.id,
#     name: "Disney Springs",
#     description: "Entertainment and Retail shopping area",
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: "ride",
#     route_type: "cyclocross",
#     thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
# )

# # route1 = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
# #     thumbnail: thumbnail_sample
# # )

# # route2 = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
# #     thumbnail: thumbnail_sample
# # )

# # route3 = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
# #     thumbnail: thumbnail_sample
# # )

# # route4 = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
# #     thumbnail: thumbnail_sample
# # )

# # route5 = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
# #     thumbnail: thumbnail_sample
# # )

# # route6 = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
# #     thumbnail: thumbnail_sample
# # )
    
# p "Routes Done"

# # route = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type),
#     # thumbnail: thumbnail_sample

# # )
# # route = Route.create!(
# #     user_id: user_id_generator(users_array).id,
# #     name: Faker::Games::SuperSmashBros.stage,
# #     description: Faker::TvShows::MichaelScott.quote,
# #     distance: ((rand(0.1..300.0) * 100).round / 100.0),
# #     time: rand(0..9999),
# #     elevation: rand(0..300),
# #     activity_type: activity_type_generator(activity_type),
# #     route_type: route_type_generator(route_type)
# # )
    
    
#     # {
#     # username: "Matantan", 
#     # password: "password", 
#     # fname: "Aaron", 
#     # lname: "Torres", 
#     # birthday: "1990-09-28", 
#     # gender: "M", 
#     # location: 10014
#     # }


# p "Seeds Done"