const e101 = {
  setting: {
    chapterbg: require('../images/room.png'),
    background: ['../images/background/ep1_toilet.jpg'],
    episode: 1,
    chapter: 1,
  },
  clue: [
    {
      name: 'bottle',
      start_index: [8, 11],
      isasaved: 1,
      image: '../images/clue/ep1_bottle.jpg',
      isdetected: 0,
    },
  ],
  backgroundsetting: {
    index: 0,
    location: ['80%', '60%'],
    size: ['20%', '25%'],
  },
  scripts: [
    {
      name: '배교수',
      text: '살인 사건이 발생했네',
      img: '../images/character/prof.jpg',
      type: 0,
      audio: '../audio/episode1/chapter1/dg1',
      sfx: 0,
      index: 0,
    },
  ],
};

export default e101;
