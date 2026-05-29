db = db.getSiblingDB("ChapoKingMusic");

// Alle Collections löschen
db.kuenstler.drop();
db.album.drop();
db.genre.drop();
db.playlist.drop();