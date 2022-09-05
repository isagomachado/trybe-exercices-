//ex.1
db.restaurants.countDocuments({rating: {$not: {$lte: 5}}})

// ex.2
db.restaurants.countDocuments({
  $or: [
    {rating: {$gte: 6}},
    {borough: 'Brooklyn'}
  ]
})

// Ex. 3
db.restaurants.countDocuments({
  $and: [
    {borough: {$in: ['Queens', 'Staten Island', 'Brooklyn']}}, 
    {rating: {$gt: 4}},
  ]
})

// ex.4
db.restaurants.countDocuments({
  $nor: [
    {cuisine: 'American'}, 
    {rating: 1},
  ]
})

// ex.5
db.restaurants.find({
  $and: [
    {
      $or: [
        {borough: 'Brooklyn'}, 
        {cuisine: {$ne:'Delicatessen' }}
      ]
    }, 
    {rating: {$gt: 6, $lt: 10}},
  ]
})
