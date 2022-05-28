declare module "@orangybot/musicfilters";

declare module "erela.js" {
  import * as Erela from "erela.js";
  interface Player {
    EnableFilter(Filter: string): Function;
    DisableFilter(Filter: string): Function;
  }
}
