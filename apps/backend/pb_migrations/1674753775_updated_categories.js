migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.listRule = "@request.auth.id = budgetbook.id"
  collection.viewRule = "@request.auth.id = budgetbook.id"
  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = budgetbook.id"
  collection.updateRule = "@request.auth.id = budgetbook.id"
  collection.deleteRule = "@request.auth.id = budgetbook.id"

  // remove
  collection.schema.removeField("dcvceefo")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("posve30ju9bla6o")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dcvceefo",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
