// ex.1
db.restaurants.find().sort({'name': 1})
db.restaurants.find({}, {name: 1}).sort({'name': 1})

// ex.2
db.restaurants.find({}, {name: 1, rating: 1}).sort({'rating':-1})
db.restaurants.find().sort({'rating':-1})
