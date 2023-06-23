// `Resource` modeli buraya
const db = require("../../data/dbConfig");

async function resourceGetir() {
  let resources = await db("resources");

  return resources;
}

async function findById(resource_id) {
  const resource = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return resource;
}

async function resourceEkle(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return findById(resource_id);
}

module.exports = {
  resourceGetir,

  resourceEkle,
};
