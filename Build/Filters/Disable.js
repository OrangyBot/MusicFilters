"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disable = void 0;
const FilterDefinitions_1 = __importDefault(require("./FilterDefinitions"));
function Disable(ThisObject, EnabledFiltersArray, FilterName) {
    return __awaiter(this, void 0, void 0, function* () {
        let equalizer;
        let tremolo;
        let vibrato;
        let lowPass;
        let timescale;
        let karaoke;
        function FilterSelection(Parse) {
            let ParsedValue;
            if (Parse.value) {
                ParsedValue = JSON.parse(Parse.value);
            }
            else {
                Parse = JSON.parse(Parse);
            }
            if (Parse.filter === FilterName) {
                EnabledFiltersArray.splice(EnabledFiltersArray.indexOf(JSON.stringify(Parse)), 1);
                return;
            }
            switch (Parse.type) {
                case "equalizer":
                    equalizer = ParsedValue;
                    break;
                case "tremolo":
                    tremolo = ParsedValue;
                    break;
                case "vibrato":
                    vibrato = ParsedValue;
                    break;
                case "lowPass":
                    lowPass = ParsedValue;
                    break;
                case "timescale":
                    timescale = ParsedValue;
                    break;
                case "karaoke":
                    karaoke = ParsedValue;
                    break;
            }
        }
        for (const Definition of FilterDefinitions_1.default) {
            for (const Filter of EnabledFiltersArray) {
                FilterSelection(JSON.parse(Filter));
            }
            switch (Definition.filter) {
                case FilterName:
                    FilterSelection(Definition);
                    ThisObject.node.send({
                        op: "filters",
                        guildId: ThisObject.guild,
                        equalizer: equalizer,
                        tremolo: tremolo,
                        vibrato: vibrato,
                        lowPass: lowPass,
                        timescale: timescale,
                        karaoke: karaoke,
                    });
                    break;
            }
        }
    });
}
exports.Disable = Disable;
