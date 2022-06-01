import Definitions from "./FilterDefinitions";

export async function Disable(
  ThisObject: any,
  EnabledFiltersArray: string[],
  FilterName: string
) {
  let equalizer: any;
  let tremolo: any;
  let vibrato: any;
  let lowPass: any;
  let timescale: any;
  let karaoke: any;

  function FilterSelection(Parse: any) {
    let ParsedValue: any;
    if (Parse.value) {
      ParsedValue = JSON.parse(Parse.value);
    } else {
      Parse = JSON.parse(Parse);
    }

    if (Parse.filter === FilterName) {
      EnabledFiltersArray.splice(
        EnabledFiltersArray.indexOf(JSON.stringify(Parse)),
        1
      );
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

  for (const Definition of Definitions) {
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
}
