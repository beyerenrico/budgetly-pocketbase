migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("541tv2ut2k6zaz7")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("541tv2ut2k6zaz7")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
