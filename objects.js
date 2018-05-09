let playlist = {artistName: songTitle}



function updatePlaylist(object, name, song) {
  return Object.assign({}, object {[name]: song});
}