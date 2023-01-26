migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
