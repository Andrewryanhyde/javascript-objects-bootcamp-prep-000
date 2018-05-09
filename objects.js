let playlist = {
  "Lady Gaga" : "Paparazzi"
}



function updatePlaylist(object, key, value) {
  return Object.assign({}, object, { [key] : value});
}