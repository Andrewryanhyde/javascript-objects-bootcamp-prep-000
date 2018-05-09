let playlist = {
  LadyGaga: "Telephone",
  Beyonce: "Halo",
  Muse: "Supermassive Black Hole"
};

  
function updatePlayList(playlist, artistName, songTitle) {
  return Object.assign(playlist, artistName, songTitle)

}