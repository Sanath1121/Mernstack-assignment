## MongoDB Commands

    -> Check existing databases
            show databases (or) show dbs

1.  Create Database
    use database-name

2.  Create collection(tables in RDBMS)
    db.createCollection("name-of-collection")
    -> Check collections of a database
    show collections

3.  Insert Documents into that collection(rows inRDBMS)
    db.collection-name.insertOne(document)
    db.collection-name.insertMany([d1,d2,...])
    Structure of a mongodb Document:
    {
    "name":"ravi",
    "age":21,
    "city":"hyderabad"
    }

4 . Read Documents
db.collection-name.findOne()
db.collection-name.find()

            -> Query operators
                 db.collection-name.findOne({field:{op:value}})
                    $eq  (===)
                    $gt  (>)
                    $gte (>=)
                    $lt  (<)
                    $lte (<=)
                    $ne  (!=)
                    $in
            -> Logical operators (Join multiple conditions)
                db.collection-name.find({$and:[cond-1,cond-2,...]})
                    $and  (&&)
                    $or   (||)
                    $not  (! )

4.  Update a document
    db.collection-name.updateOne(condition,update)
    db.collection-name.updateMany(condition,update)
5.  Delete a document
    db.collection-name.deleteOne(condition)
    db.collection-name.deleteMany(condition)

6.  Reading from embeded document
    findOne/find({"main-field.nested-field":value})

7.  Reading from array
    a. Single element comparision
    findOne/find({array-fleid:"element"})
    b. Multiple elements comparision
    findOne/find({array-field:{$all:[element1,element-2,....]}})

8.  Update embedded document
    updateOne/updateMany(condition,{ $set:{"field.nested-field":value}})

            updateOne/updateMany(condition,{ $unset:{"field.nested-field":""}})

9.  Update array
    adding new element
    updateMany/updateOne(condition,{$push:{field:"element"}})
            updateMany/updateOne(condition,{$push:{$each:["element-1,el2,....]}})

         removing elements
            either first/last
             updateMany/updateOne(condition,{$pop:{field:+1/-1}})

             in between
             updateMany/updateOne(condition,{$pull:{field:value}})

             multiple elements
             updateMany/updateOne(condition,{$pullAll:{field:[v1,v2,v3,..]}})

10. Updating array of documents
    updateMany/updateOne(condition,{$set:{"field.index.nested-field":value}})

          let x=   [{a:10},{a:20}]
          x[0].a
