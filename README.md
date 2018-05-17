## Mideast Tunes plugin for MellowPlayer

This is an unofficial plugin to enable support for [Mideast Tunes](https://mideastunes.com) on [MellowPlayer](https://github.com/ColinDuquesnoy/MellowPlayer)

### Installation
  - clone this repo to
    + Linux: `~/.local/share/MellowPlayer/plugins/mideast-tunes`
    + Windows:
    + Mac:
  - Launch MellowPlayer, you should see `Mideast Tunes` in the services

### TODO
  - Add Mideast Tunes Theme
  - Add Support for map.mideastunes.com
  - Add Support for map.mideastunes.com (Arabic Version)
  - Fix Mideast Tunes Logo to be more consistent with the other logos (is that copyrighted?)
  - Seek control
  - Volume control
  - Add integrated tests (maybe use phantomjs/nightmare/chrome headless to ensure all the classes and elements are still in place)


### Disclaimer
Only tested on Ubuntu 18.04

Does not work in AppImage because it needs flash (so it won't show up)

Parts of the code are from/inspired by [existing plugins](https://github.com/ColinDuquesnoy/MellowPlayer/tree/develop/src/plugins)
