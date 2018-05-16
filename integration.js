//
// This file is a plugin for MellowPlayer.
//
// MellowPlayer is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// MellowPlayer is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with MellowPlayer.  If not, see <http://www.gnu.org/licenses/>.
//

/*******************************************************************************
 This is an unofficial plugin to enable support for [Mideast Tunes](https://mideastunes.com)
 on [MellowPlayer](https://github.com/ColinDuquesnoy/MellowPlayer)

 Parts of the code are from/inspired by [existing plugins](https://github.com/ColinDuquesnoy/MellowPlayer/tree/develop/src/plugins)

********************************************************************************/

const helpers = {
  playbackStatusOnLoad: mellowplayer.PlaybackStatus.STOPPED,
  buttons: {
    play: $('#player .playback-play'),
    pause: $('#player .playback-play.paused'),
    next: $('#player .playback-next'),
    previous: $('#player .playback-prev'),
    favorite: $('#player .player-info-heart'),
    progressBar: $('#player .player-info-progress-bar')
  },
  elements: {
    total: $('#player .small-counter .total'),
    position: $('#player .small-counter .current'),
    title: $('#player .player-info-song-title-text'),
    artist: $('#player .player-info-song-title-text'),
    heart: $('#player .player-info-element-heart.active'),
    volume: $('#volume-slider a')
  },
  // Haven't encountered anything over an hour yet,
  // so not sure if the service will just increment the minutes or add an hour entry
  // For now, assuming the first case
  getTime: function (el) {
    let value = 0
    try {
      const element = el[0]
      if (element) value = toSeconds(element.innerText)
    } catch (e) {}

    return value
  },
  getDuration: function () {
    return helpers.getTime(helpers.elements.total)
  },
  getPosition: function () {
    return helpers.getTime(helpers.elements.position)
  },
  getTitle: function () {
    let title = ''
    try {
      const element = helpers.elements.title[0]
      if (element) title = element.innerText.split('-')[1].trim()
    } catch (e) {}

    return title
  },
  getSongId: function () {
    const title = helpers.getTitle()
    if (!title) return 0
    return getHashCode(title)
  },
  getArtist: function () {
    let artist = ''
    try {
      const element = helpers.elements.artist[0]
      if (element) artist = element.innerText.split('-')[0].trim()
    } catch (e) {}

    return artist
  },
  isFavorite: function () {
    let favorite = false
    try {
      const element = helpers.elements.heart[0]
      if (element) favorite = !!element
    } catch (e) {}

    return favorite
  },
  getVolume: function () {
    let volume = 1
    try {
      const element = helpers.elements.volume[0].attr('style').replace('left: ', '')
      if (element && !isNaN(element)) volume = element / 100
    } catch (e) {}

    return volume
  },
  getAlbumTitle: function () {
    // Not currently supported by this plugin
    return ''
  },
  getAlbumArt: function () {
    // Not currently supported by this plugin
    return ''
  }
}

let playbackStatus = helpers.playbackStatusOnLoad
function update () {
  return {
    'playbackStatus': playbackStatus,
    'canSeek': false,
    'canGoNext': true,
    'canGoPrevious': true,
    'canAddToFavorites': true,
    'volume': helpers.getVolume(),
    'duration': helpers.getDuration(),
    'position': helpers.getPosition(),
    'songId': helpers.getSongId(),
    'songTitle': helpers.getTitle(),
    'artistName': helpers.getArtist(),
    'albumTitle': helpers.getAlbumTitle(),
    'artUrl': helpers.getAlbumArt(),
    'isFavorite': helpers.isFavorite()
  }
}

function play () {
  try {
    helpers.buttons.play[0].click()
    playbackStatus = mellowplayer.PlaybackStatus.PLAYING
  } catch (e) {}
}

function pause () {
  try {
    helpers.buttons.pause[0].click()
    playbackStatus = mellowplayer.PlaybackStatus.PAUSED
  } catch (e) {}
}

function goNext () {
  try {
    helpers.buttons.next[0].click()
    playbackStatus = mellowplayer.PlaybackStatus.PLAYING
  } catch (e) {}
}

function goPrevious () {
  try {
    helpers.buttons.previous[0].click()
    playbackStatus = mellowplayer.PlaybackStatus.PLAYING
  } catch (e) {}
}

function addToFavorites () {
  try {
    !helpers.isFavorite() && helpers.buttons.favorite[0].click()
  } catch (e) {}
}

function removeFromFavorites () {
  try {
    helpers.isFavorite() && helpers.buttons.favorite[0].click()
  } catch (e) {}
}

function setVolume (volume) {
  // Not currently supported by this plugin
}

function seekToPosition (position) {
  // Not currently supported by this plugin
}
