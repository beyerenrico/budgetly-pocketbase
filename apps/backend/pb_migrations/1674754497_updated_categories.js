migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.listRule = "@request.auth.id = @request.data.user"
  collection.viewRule = "@request.auth.id = @request.data.user"
  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.user"
  collection.updateRule = "@request.auth.id = @request.data.user"
  collection.deleteRule = "@request.auth.id = @request.data.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
