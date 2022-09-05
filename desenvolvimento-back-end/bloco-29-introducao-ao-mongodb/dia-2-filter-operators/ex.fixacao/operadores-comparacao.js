// ex.1
db.restaurants.find({borough: {$in: ["Queens", "Staten Island", "Bronx"]}})

// ex.2
db.restaurants.countDocuments({cuisine: {$ne:"American"}})

// ex.3
db.restaurants.countDocuments({rating: {$gte: 8}})

// ex.4
db.restaurants.countDocuments({rating: {$lt: 4}})

// ex.5
db.restaurants.countDocuments({rating: {$nin: [5, 6, 7]}})