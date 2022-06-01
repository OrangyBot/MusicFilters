"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const erela_js_1 = require("erela.js");
class MusicFilters extends erela_js_1.Plugin {
    load() {
        erela_js_1.Structure.extend("Player", (Player) => class extends Player {
            constructor() {
                super(...arguments);
                this.EnabledFilters = [];
                this.EnableFilter = (RequestedFilter) => {
                    switch (RequestedFilter) {
                        case null:
                            return;
                        default:
                            const { Enable } = require("./Filters/Enable");
                            Enable(this, this.EnabledFilters, RequestedFilter);
                            return "Enabled " + RequestedFilter;
                    }
                };
                this.DisableFilter = (RequestedFilter) => {
                    switch (RequestedFilter) {
                        case null:
                            return;
                        default:
                            const { Disable } = require("./Filters/Disable");
                            Disable(this, this.EnabledFilters, RequestedFilter);
                            return "Disabled " + RequestedFilter;
                    }
                };
            }
        });
    }
}
exports.default = MusicFilters;
