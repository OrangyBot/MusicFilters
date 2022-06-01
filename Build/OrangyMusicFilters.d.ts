import { Plugin } from "erela.js";
declare type Filter = "BassBoost" | "Karaoke" | "Lofi" | "Smooth" | "Speed" | "Unstable" | "Weak";
export default class MusicFilters extends Plugin {
    load(): void;
}
declare module "erela.js/structures/Player" {
    interface Player {
        EnabledFilters: string[];
        EnableFilter: (RequestedFilter: Filter) => string;
        DisableFilter: (RequestedFilter: Filter) => string;
    }
}
export {};
