let playlist = {
  'Lady Gaga' : 'Paparazzi'
}




var updatePlaylist = function(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}