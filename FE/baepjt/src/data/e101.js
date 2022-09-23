const e101 = {
  setting: {
    chapterbg: require('../images/profroom.jpg'),
    // background_touch: [require('../images/background/ep1_toilet.jpg')],
    background_just: [
      require('../images/profroom.jpg'),
      require('../images/room.png'),
      require('../images/room_info.png'),
    ],
    episode: 1,
    chapter: 1,
    initial: [{index: 0, value: false}, {index: 1, value: false}, {index: 2, value: false}],
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
  backgroundsetting: [
    {
      index: 0,
      location: ['80%', '60%'], // 버튼 위치
      size: ['20%', '25%'], // 버튼 사이즈
    },
    {
      index: 1,
      location: ['40%', '30%'],
      size: ['20%', '25%'],
    },
    {
      index: 2,
      location: ['10%', '20%'],
      size: ['20%', '25%'],
    },
  ],
  scripts: [
    {
      name: '유저',
      text: '날씨가 꽤 좋다.',
      img: require('../images/face.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [0],
      character: [require('../images/back_preview.png')],
      bg: 0,
    },
    {
      name: '유저',
      text: '이제 막 서류 분류를 끝낸 나는 화창한 날씨에 압도되어 나도 모르게 콧노래를 불렀다.',
      img: require('../images/die.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 1,
      position: [1],
      character: [require('../images/all_preview.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '자네 무슨 좋은 일 있나?',
      img: require('../images/die.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 1,
      position: [1],
      character: [require('../images/all_preview.png')],
      bg: 0,
    },
    {
      name: '유저',
      text: '이 분은 배교수님. 범죄심리학계에서 많은 사건을 해결한 프로파일러로 유명하시며 우리나라에 탐정이 법제화 된 후 공식 탐정으로 활동하고 계신 분이다.',
      img: require('../images/prof.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 2,
      position: [],
      character: [require('../images/prof.png')],
      bg: 0,
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '날씨가 좋은 건 좋지. 하지만 내 교수실에서 그 말을 하면 항상 무슨 사건이 일어나던데...',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '유저',
      text: '그러자 거짓말처럼 교수님의 핸드폰에서 전화 벨소리가 울리기 시작했다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '여보세요?',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '유저',
      text: '교수님은 전화를 받고 곧내 심각한 표정으로 통화를 이어 나가시다가 종료했다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: ' 말이 씨가 될 줄이야... 방금 급한 호출이 도착했네.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '우리 대학교 근처의 아파트에서 사망 사건이 발생했다는 군. 어서 가보자고.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 0,
    },
    {
      name: '유저',
      text: '교수님과 나는 급하게 사건이 일어난 건물로 달려갔다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 1,
    },
    {
      name: '조사관',
      text: '여기 사망자에 대한 정보입니다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 2,
    },
    {
      name: '배교수',
      text: '혹시 신고자는 누구죠?',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
      bg: 1,
    },
    {
      name: '조사관',
      text: '여기 이 분입니다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '백지현',
      text: '안녕하세요..',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '배교수',
      text: '사망자와는 어떤 관계시죠?',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '백지현',
      text: '저는... 종오와 같이 강박증 모임을 하던 사이에요. 어제도 그 모임의 정모가 있었구요.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
    {
      name: '유저',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
      img: require('../images/three.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/three.png')],
    },
  ],
};

export default e101;
