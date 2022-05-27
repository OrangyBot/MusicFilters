"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const erela_js_1 = require("erela.js");
const path_1 = require("path");
const fs_1 = require("fs");
let EnabledFilters = [];
class OrangyMusicFilters extends erela_js_1.Plugin {
    constructor() {
        super();
        console.log("Hi!");
    }
    load(ErelaManager) {
        this.ErelaManager = ErelaManager;
        erela_js_1.Structure.extend("Player", (Player) => class extends Player {
            constructor() {
                super(...arguments);
                this.EnableFilter = (RequestedFilter) => {
                    const Filters = (0, fs_1.readdirSync)((0, path_1.join)(__dirname, "Filters"));
                    for (const Filter of Filters) {
                        switch (Filter) {
                            case RequestedFilter:
                                EnabledFilters.push(Filter);
                                const FilterFile = require((0, path_1.join)(__dirname, "Filters") +
                                    `/${Filter}`);
                                FilterFile.Enable(this);
                                return "Enabled " + Filter;
                        }
                    }
                };
                this.DisableFilter = (RequestedFilter) => {
                    const Filters = (0, fs_1.readdirSync)((0, path_1.join)(__dirname, "Filters"));
                    for (const Filter of Filters) {
                        switch (Filter) {
                            case RequestedFilter:
                                EnabledFilters.splice(EnabledFilters.indexOf(Filter), 1);
                                const FilterFile = require((0, path_1.join)(__dirname, "Filters") +
                                    `/${Filter}`);
                                FilterFile.Disable(this);
                                return "Disabled " + Filter;
                        }
                    }
                };
            }
        });
    }
}
exports.default = OrangyMusicFilters;
