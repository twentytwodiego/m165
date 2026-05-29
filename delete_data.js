db = db.getSiblingDB("ChapoKingMusic");

// deleteOne: Afro löschen
db.genre.deleteOne(
  { _id: ObjectId("6a1850946d8694f9059df8a6") }
);

// deleteMany: Drill und Rap löschen mit ODER
db.genre.deleteMany(
  { $or: [
    { _id: ObjectId("6a1850946d8694f9059df8a4") },
    { _id: ObjectId("6a1850946d8694f9059df8a5") }
  ]}
);