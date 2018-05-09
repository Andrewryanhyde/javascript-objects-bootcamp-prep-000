let playlist = {
  LadyGaga: "Telephone",
  Beyonce: "Halo",
  Muse: "Supermassive Black Hole"
};

function updatePlayList(playlist, artistName songTitle) {
  Object.assign({}, playlist, {
    artistName: songTitle
  })
  return playlist;
}