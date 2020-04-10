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

# user2 = User.create!(
#     username: Faker::Esport.player, 
#     password: "password", 
#     fname: Faker::Name.first_name, 
#     lname: Faker::Name.last_name, 
#     birthday: random_yankees_date, 
#     gender: random_gender, 
#     location: Faker::Address.zip_code.to_i )

# user3 = User.create!(
#     username: Faker::Esport.player, 
#     password: "password", 
#     fname: Faker::Name.first_name, 
#     lname: Faker::Name.last_name, 
#     birthday: random_yankees_date, 
#     gender: random_gender, 
#     location: Faker::Address.zip_code.to_i )

# user4 = User.create!(
#     username: Faker::Esport.player, 
#     password: "password", 
#     fname: Faker::Name.first_name, 
#     lname: Faker::Name.last_name, 
#     birthday: random_yankees_date, 
#     gender: random_gender, 
#     location: Faker::Address.zip_code.to_i )

# user5 = User.create!(
#     username: Faker::Esport.player, 
#     password: "password", 
#     fname: Faker::Name.first_name, 
#     lname: Faker::Name.last_name, 
#     birthday: random_yankees_date, 
#     gender: random_gender, 
#     location: Faker::Address.zip_code.to_i )

# user6 = User.create!(
#     username: Faker::Esport.player, 
#     password: "password", 
#     fname: Faker::Name.first_name, 
#     lname: Faker::Name.last_name, 
#     birthday: random_yankees_date, 
#     gender: random_gender, 
#     location: Faker::Address.zip_code.to_i )
    
p "Users Done"

# Route Helper Methods
# users_array = [ user1, user2, user3, user4, user5, user6 ]
# activity_type = ["ride", "run"]
# route_type = ["road", "MTB", "cyclocross", "road", "trail"]
# thumbnail_sample = "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
    
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
    thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
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
    thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
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
    thumbnail: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"
)

# route1 = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
#     thumbnail: thumbnail_sample
# )

# route2 = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
#     thumbnail: thumbnail_sample
# )

# route3 = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
#     thumbnail: thumbnail_sample
# )

# route4 = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
#     thumbnail: thumbnail_sample
# )

# route5 = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
#     thumbnail: thumbnail_sample
# )

# route6 = Route.create!(
#     user_id: user_id_generator(users_array).id,
#     name: Faker::Games::SuperSmashBros.stage,
#     description: Faker::TvShows::MichaelScott.quote,
#     distance: ((rand(0.1..300.0) * 100).round / 100.0),
#     time: rand(0..9999),
#     elevation: rand(0..300),
#     activity_type: activity_type_generator(activity_type),
#     route_type: route_type_generator(route_type),
#     thumbnail: thumbnail_sample
# )
    
p "Routes Done"

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