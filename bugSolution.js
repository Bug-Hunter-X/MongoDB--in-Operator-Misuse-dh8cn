```javascript
//Correct usage of $in operator
db.collection('myCollection').find({field: {$in: [1,2,3]}}).toArray()
```