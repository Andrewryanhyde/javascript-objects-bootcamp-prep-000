let playlist = {
  "Lady Gaga": "Telephone"
  "Beyonce": "Halo"
  "Muse": "Supermassive Black Hole"
};

function updatePlayList(playlist, artist, song) {
  Object.assign({}, playlist {
    artist: song
  }
  return playlist;
}