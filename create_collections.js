// Datenbank wechseln
use ChapoKingMusic;

// Collection: Künstler
db.createCollection("kuenstler");

// Collection: Album (mit eingebetteten Songs)
db.createCollection("album");

// Collection: Genre
db.createCollection("genre");

// Collection: Playlist
db.createCollection("playlist");