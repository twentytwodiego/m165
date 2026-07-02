-- Keyspace erstellen
CREATE KEYSPACE IF NOT EXISTS musik
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE musik;

-- Screen 1: Künstler-Seite
CREATE TABLE IF NOT EXISTS kuenstler_alben (
  kuenstler_name text,
  album_jahr int,
  album_titel text,
  label text,
  PRIMARY KEY (kuenstler_name, album_jahr, album_titel)
) WITH CLUSTERING ORDER BY (album_jahr DESC, album_titel ASC);

-- Screen 2: Album-Seite
CREATE TABLE IF NOT EXISTS album_songs (
  album_titel text,
  track_nummer int,
  song_titel text,
  dauer_sekunden int,
  PRIMARY KEY (album_titel, track_nummer)
) WITH CLUSTERING ORDER BY (track_nummer ASC);

-- Screen 3: Song-Seite
CREATE TABLE IF NOT EXISTS song_details (
  song_titel text,
  kuenstler_name text,
  genre text,
  veroeffentlicht date,
  PRIMARY KEY (song_titel, kuenstler_name)
) WITH CLUSTERING ORDER BY (kuenstler_name ASC);

-- Screen 4: Playlist-Seite
CREATE TABLE IF NOT EXISTS playlist_songs (
  playlist_name text,
  hinzugefuegt_am date,
  song_titel text,
  kuenstler_name text,
  PRIMARY KEY (playlist_name, hinzugefuegt_am)
) WITH CLUSTERING ORDER BY (hinzugefuegt_am DESC);