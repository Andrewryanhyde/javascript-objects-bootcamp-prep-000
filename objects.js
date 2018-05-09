let playlist = {
  LadyGaga: "Telephone",
  Beyonce: "Halo",
  Muse: "Supermassive Black Hole"
};

  
function updatePlayList (playlist, artistName, songTitle) {
  playlist.assign({}, playlist, {
    artistName: songTitle
  })
  return playlist;

}