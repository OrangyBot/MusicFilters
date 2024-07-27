# Orangy's MusicFilters package.

## NOTE: This project is no longer maintained and archived as of 27/07/2024.
This is Orangy's official package for erela.js music filters!

:white_check_mark: Multiple filters support
:white_check_mark: Erela.js support
:white_check_mark: Open source
:white_check_mark: Easy to use
:white_check_mark: Fast

# Available filters

:white_check_mark: BassBoost
:white_check_mark: Karaoke
:white_check_mark: Lofi
:white_check_mark: Smooth
:white_check_mark: Speed
:white_check_mark: Unstable
:white_check_mark: Weak

## How to use

```javascript
//ES6:
import { Manager } from "erela.js";
import MusicFilters from "@orangybot/musicfilters";

//Create the erela.js manager
const ErelaManager = new Manager({
    nodes //your nodes,
    plugins: [new MusicFilters()],
    send: (id, payload) => {
        //your send code
    }
})

//Get the current guild player object
const GuildPlayer = ErelaManager.get(your-guild-id-here);

//Enable the Speed filter
GuildPlayer.EnableFilter("Speed");
//Disable the Speed filter
GuildPlayer.DisableFilter("Speed");

//CommonJS:
const { Manager } = require("erela.js");
const MusicFilters = require("@orangybot/musicfilters");

//Create the erela.js manager
const ErelaManager = new Manager({
    nodes //your nodes,
    plugins: [new MusicFilters()],
    send: (id, payload) => {
        //your send code
    }
})

//Get the current guild player object
const GuildPlayer = ErelaManager.get(your-guild-id-here);

//Enable the Speed filter
GuildPlayer.EnableFilter("Speed");
//Disable the Speed filter
GuildPlayer.DisableFilter("Speed");
```
