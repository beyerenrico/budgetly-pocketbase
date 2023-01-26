migrate((db) => {
  const collection = new Collection({
    "id": "9qzw9okuinx87e1",
    "created": "2023-01-26 17:25:49.142Z",
    "updated": "2023-01-26 17:25:49.142Z",
    "name": "months",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gaz5tyb7",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 2,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dzq59dt1",
        "name": "rank",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9qzw9okuinx87e1");

  return dao.deleteCollection(collection);
})
