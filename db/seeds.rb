# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

def random_yankees_date
    dates = ["2009-11-4", "2000-10-26", "1999-10-27", "1998-10-21", "1996-10-26"]
    dates.sample
end

def random_gender
    gender = ["M","F","Other"]
    gender.sample
end

user1 = User.create(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user2 = User.create(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user3 = User.create(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user4 = User.create(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )

user5 = User.create(
    username: Faker::Esport.player, 
    password: "password", 
    fname: Faker::Name.first_name, 
    lname: Faker::Name.last_name, 
    birthday: random_yankees_date, 
    gender: random_gender, 
    location: Faker::Address.zip_code.to_i )



# user1 = User.create(username: Faker::TvShows::RickAndMorty.character, password: 'password')
# user2 = User.create(username: Faker::TvShows::RickAndMorty.character, password: 'password')
# user3 = User.create(username: Faker::TvShows::RickAndMorty.character, password: 'password')
# user4 = User.create(username: Faker::TvShows::RickAndMorty.character, password: 'password')
# user5 = User.create(username: Faker::TvShows::RickAndMorty.character, password: 'password')
