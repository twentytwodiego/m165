db = db.getSiblingDB("ChapoKingMusic");

// Collection: kuenstler
// UND-Verknüpfung: name enthält "Chapo" UND anzahl_mitglieder ist 2
db.kuenstler.find({
  $and: [
    { name: /Chapo/ },
    { anzahl_mitglieder: 2 }
  ]
});

// Collection: genre
// ODER-Verknüpfung: name ist "Drill" ODER "Rap"
db.genre.find({
  $or: [
    { name: "Drill" },
    { name: "Rap" }
  ]
});

// Collection: album
// Regex: label enthält "Double"
// Projektion MIT _id
db.album.find(
  { label: /Double/ },
  { _id: 1, titel: 1, jahr: 1 }
);

// Collection: album
// DateTime Filterung: jahr nach 2022
// Projektion OHNE _id
db.album.find(
  { jahr: { $gt: 2022 } },
  { _id: 0, titel: 1, jahr: 1, label: 1 }
);

// Collection: playlist
// DateTime Filterung: erstellt_am nach 2024-01-01
db.playlist.find({
  erstellt_am: { $gt: new Date("2024-01-01") }
});

// Collection: playlist
// Projektion OHNE _id
db.playlist.find(
  {},
  { _id: 0, name: 1, anzahl_songs: 1 }
);