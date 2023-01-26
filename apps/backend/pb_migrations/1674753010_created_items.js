migrate((db) => {
  const collection = new Collection({
    "id": "0ejptjyquaxh49c",
    "created": "2023-01-26 17:10:10.343Z",
    "updated": "2023-01-26 17:10:10.343Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rmk6z3ki",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yqpbswvb",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 512,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e4jqtihm",
        "name": "budgetbook",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "vhrl5x139avfaaj",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "3shclawh",
        "name": "category",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "posve30ju9bla6o",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ejptjyquaxh49c");

  return dao.deleteCollection(collection);
})
