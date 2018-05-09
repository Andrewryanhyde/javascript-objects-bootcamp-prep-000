let playlist = {
  "Lady Gaga" : "Paparazzi"
}



function updatePlaylist(object, name, song) {
  return Object.assign({}, object, { [name]: song});
}