let playlist = {
  'Lady Gaga' : 'Paparazzi'
}


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}


var updatePlaylist = function(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}