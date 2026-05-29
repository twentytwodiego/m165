db = db.getSiblingDB("ChapoKingMusic");

// ObjectIds
var idChapoKing = new ObjectId();
var idDrill = new ObjectId();
var idRap = new ObjectId();
var idAfro = new ObjectId();
var idAlbumLP = new ObjectId();
var idAlbumTM = new ObjectId();
var idPlaylist1 = new ObjectId();
var idPlaylist2 = new ObjectId();
var idSong1 = new ObjectId();
var idSong2 = new ObjectId();
var idSong3 = new ObjectId();
var idSong4 = new ObjectId();
var idSong5 = new ObjectId();

// Künstler
db.kuenstler.insertOne({
  _id: idChapoKing,
  name: "Chapo Mulato & King NB",
  herkunft: "Dübendorf",
  stil: "Drill/Rap",
  gegruendet: new Date("2018-01-01"),
  anzahl_mitglieder: 2
});

// Genre
db.genre.insertMany([
  {
    _id: idDrill,
    name: "Drill",
    beschreibung: "Harter Rap-Stil aus Chicago",
    beliebtheit: 90
  },
  {
    _id: idRap,
    name: "Rap",
    beschreibung: "Klassischer Hip-Hop",
    beliebtheit: 95
  },
  {
    _id: idAfro,
    name: "Afro",
    beschreibung: "Afrikanisch beeinflusster Stil",
    beliebtheit: 80
  }
]);

// Album mit eingebetteten Songs
db.album.insertMany([
  {
    _id: idAlbumLP,
    kuenstler_id: idChapoKing,
    titel: "La Plata",
    jahr: 2023,
    label: "Double O",
    songs: [
      {
        _id: idSong1,
        titel: "Bando",
        dauer: 2.45,
        veroeffentlicht: new Date("2023-03-10"),
        genre_ids: [idDrill, idRap],
        streams: 150000
      },
      {
        _id: idSong2,
        titel: "No Cap",
        dauer: 3.10,
        veroeffentlicht: new Date("2023-03-10"),
        genre_ids: [idDrill],
        streams: 200000
      },
      {
        _id: idSong3,
        titel: "Libre",
        dauer: 3.30,
        veroeffentlicht: new Date("2023-03-10"),
        genre_ids: [idRap, idAfro],
        streams: 180000
      }
    ]
  },
  {
    _id: idAlbumTM,
    kuenstler_id: idChapoKing,
    titel: "Trap Money",
    jahr: 2024,
    label: "Double O",
    songs: [
      {
        _id: idSong4,
        titel: "Money Moves",
        dauer: 2.55,
        veroeffentlicht: new Date("2024-01-15"),
        genre_ids: [idDrill],
        streams: 300000
      },
      {
        _id: idSong5,
        titel: "On Top",
        dauer: 3.20,
        veroeffentlicht: new Date("2024-01-15"),
        genre_ids: [idRap],
        streams: 250000
      }
    ]
  }
]);

// Playlist
db.playlist.insertMany([
  {
    _id: idPlaylist1,
    name: "Best of Chapo & King",
    erstellt_am: new Date("2024-05-01"),
    beschreibung: "Die besten Tracks",
    song_ids: [idSong1, idSong2, idSong4],
    anzahl_songs: 3
  },
  {
    _id: idPlaylist2,
    name: "Chill Drill",
    erstellt_am: new Date("2024-06-10"),
    beschreibung: "Entspannte Drill Songs",
    song_ids: [idSong3, idSong5],
    anzahl_songs: 2
  }
]);