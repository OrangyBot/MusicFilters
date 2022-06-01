const Definitions = [
  {
    filter: "BassBoost",
    value:
      '[ {"band": 0, "gain": 0.6}, {"band": 1, "gain": 0.67}, {"band": 2, "gain": 0.67}, {"band": 3, "gain": 0}, {"band": 4, "gain": -0.5}, {"band": 5, "gain": 0.15}, {"band": 6, "gain": -0.45}, {"band": 7, "gain": 0.23}, {"band": 8, "gain": 0.35}, {"band": 9, "gain": 0.45}, {"band": 10, "gain": 0.55}, {"band": 11, "gain": 0.6}, {"band": 12, "gain": 0.55}, {"band": 13, "gain": 0} ]',
    type: "equalizer",
  },
  {
    filter: "Karaoke",
    value:
      '{ "level": 1, "monoLevel": 1, "filterBand": 230, "filterWidth": 100 }',
    type: "karaoke",
  },
  {
    filter: "Lofi",
    value: '{ "speed": 0.7, "pitch": 0.8 }',
    type: "timescale",
  },
  {
    filter: "Smooth",
    value: '{ "smoothing": 15.0 }',
    type: "lowPass",
  },
  {
    filter: "Speed",
    value: '{ "speed": 1.3, "pitch": 1.3 }',
    type: "timescale",
  },
  {
    filter: "Unstable",
    value: '{ "frequency": 10, "depth": 0.5 }',
    type: "tremolo",
  },
  {
    filter: "Weak",
    value: '{ "frequency": 10, "depth": 0.9 }',
    type: "vibrato",
  },
];

export default Definitions;
