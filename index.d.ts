declare module "@orangybot/musicfilters";

import * as Erela from "erela.js";
declare module "erela.js" {
  interface Player {
    EnableFilter(Filter: string): function;
    DisableFilter(Filter: string): function;
  }
}
