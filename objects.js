let playlist = {artistName: songTitle}



function updatePlaylist(object, key, value) {
  return Object.assign({}, object {[key]: value});
}