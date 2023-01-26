migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.user"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfm1scja",
    "name": "items",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "0ejptjyquaxh49c",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.createRule = null

  // remove
  collection.schema.removeField("rfm1scja")

  return dao.saveCollection(collection)
})
