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

# Route Helper Methods
users_array = [ user1, user2, user3, user4, user5, user6 ]
activity_type = ["ride", "run"]
route_type = ["road", "MTB", "cyclocross", "road", "trail"]
    
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


route1 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)

route2 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)

route3 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)

route4 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)

route5 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)

route6 = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)
    
p "Routes Done"

route = Route.create!(
    user_id: user_id_generator(users_array).id,
    name: Faker::Games::SuperSmashBros.stage,
    description: Faker::TvShows::MichaelScott.quote,
    distance: ((rand(0.1..300.0) * 100).round / 100.0),
    time: rand(0..9999),
    elevation: rand(0..300),
    activity_type: activity_type_generator(activity_type),
    route_type: route_type_generator(route_type)
)

    
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