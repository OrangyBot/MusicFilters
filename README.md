<div align="center">
# Orangy's MusicFilters package.
This is Orangy's official package for erela.js music filters!

[X] Multiple filters support
[X] Erela.js support
[X] Open source
[X] Easy to use
[X] Fast
</div>

<div align="center">
# Available filters
[X] BassBoost
[X] Karaoke
[X] Lofi
[X] Smooth
[X] Speed
[X] Unstable
[X] Weak
</div>

<div align="center">
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
</div>