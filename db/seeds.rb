# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

@guest = User.create!(username:'guest', email:'guest@gmail.com', password:'123456')

@guest_script = Script.create!(title:'My New Script', author: 'me baby', script_type:'screenplay', user:@guest)

@guest_act = Act.create!(title:'Act 1', script:@guest_script)

@guest_scene = Scene.create!(title:'scene 1', setting:'INT. OFFICE - DAY', description:'This the test scene', characters:['jake', 'ernest'], act:@guest_act)

