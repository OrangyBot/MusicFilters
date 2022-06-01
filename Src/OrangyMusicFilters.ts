import { Plugin, Structure } from "erela.js";

type Filter =
  | "BassBoost"
  | "Karaoke"
  | "Lofi"
  | "Smooth"
  | "Speed"
  | "Unstable"
  | "Weak";

export default class MusicFilters extends Plugin {
  public load() {
    Structure.extend(
      "Player",
      (Player) =>
        class extends Player {
          public EnabledFilters: string[] = [];
          public EnableFilter = (RequestedFilter: Filter) => {
            switch (RequestedFilter) {
              case null:
                return;
              default:
                const { Enable } = require("./Filters/Enable");
                Enable(this, this.EnabledFilters, RequestedFilter);
                return "Enabled " + RequestedFilter;
            }
          };

          public DisableFilter = (RequestedFilter: Filter) => {
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
    );
  }
}

declare module "erela.js/structures/Player" {
  interface Player {
    EnabledFilters: string[];
    EnableFilter: (RequestedFilter: Filter) => string;
    DisableFilter: (RequestedFilter: Filter) => string;
  }
}
