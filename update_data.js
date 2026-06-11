db = db.getSiblingDB("ChapoKingMusic");

// updateOne: kuenstler mit _id aktualisieren
db.kuenstler.updateOne(
  { _id: ObjectId("6a1850946d8694f9059df8a3") },
  { $set: { herkunft: "Zürich", anzahl_mitglieder: 3 } }
);

// updateMany: genre mit ODER-Verknüpfung (ohne _id)
db.genre.updateMany(
  { $or: [
    { name: "Drill" },
    { name: "Rap" }
  ]},
  { $set: { beliebtheit: 100 } }
);

// replaceOne: playlist komplett ersetzen
db.playlist.replaceOne(
  { name: "Chill Drill" },
  {
    name: "Chill Drill Updated",
    erstellt_am: new Date("2025-01-01"),
    beschreibung: "Neue Version der Playlist",  
    song_ids: [],
    anzahl_songs: 0
  }
);