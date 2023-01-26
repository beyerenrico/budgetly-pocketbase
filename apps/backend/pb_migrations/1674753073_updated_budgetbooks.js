migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.listRule = "@request.auth.id = user"
  collection.viewRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
