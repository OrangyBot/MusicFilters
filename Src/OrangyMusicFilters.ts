import { Plugin, Manager, Structure } from "erela.js";
import { join } from "path";
import { readdirSync } from "fs";

let EnabledFilters: string[] = [];

export default class OrangyMusicFilters extends Plugin {
  private ErelaManager;

  public constructor() {
    super();
    console.log("Hi!");
  }

  public load(ErelaManager: Manager) {
    this.ErelaManager = ErelaManager;

    Structure.extend(
      "Player",
      (Player) =>
        class extends Player {
          EnableFilter = (RequestedFilter: string) => {
            const Filters = readdirSync(join(__dirname, "Filters"));
            for (const Filter of Filters) {
              switch (Filter) {
                case RequestedFilter:
                  EnabledFilters.push(Filter);
                  const FilterFile = require(join(__dirname, "Filters") +
                    `/${Filter}`);
                  FilterFile.Enable(this);
                  return "Enabled " + Filter;
              }
            }
          };

          DisableFilter = (RequestedFilter: string) => {
            const Filters = readdirSync(join(__dirname, "Filters"));
            for (const Filter of Filters) {
              switch (Filter) {
                case RequestedFilter:
                  EnabledFilters.splice(EnabledFilters.indexOf(Filter), 1);
                  const FilterFile = require(join(__dirname, "Filters") +
                    `/${Filter}`);
                  FilterFile.Disable(this);
                  return "Disabled " + Filter;
              }
            }
          };
        }
    );
  }
}
