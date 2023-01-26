migrate((db) => {
  const collection = new Collection({
    "id": "vhrl5x139avfaaj",
    "created": "2023-01-26 16:55:08.420Z",
    "updated": "2023-01-26 16:55:08.420Z",
    "name": "budgetbooks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mb0qstk1",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hfet7tkb",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "x4o99mdx",
        "name": "year",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 9999
        }
      },
      {
        "system": false,
        "id": "7boakvxa",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.data.user",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vhrl5x139avfaaj");

  return dao.deleteCollection(collection);
})
