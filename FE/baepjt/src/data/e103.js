const e103 = {
  setting: {
    chapterbg: require('../images/background/chapter3/room.png'),
    background_just: [
      require('../images/background/chapter3/room.png'),
      require('../images/background/chapter3/room.png'),
      require('../images/background/chapter1/room_info.png'),
      require('../images/background/chapter3/closet.png'),
      require('../images/background/chapter3/bedroom.png'),
      require('../images/background/chapter3/desk.png'),
    ],
    episode: 1,
    chapter: 1,
    initial: [
      {index: 0, value: false},
      {index: 1, value: false},
      {index: 2, value: false},
    ],
  },
  allclue: [
    [{location: ['50%', '55%']}, {location: ['40%', '20%']}],
    [
      {location: ['15%', '30%']},
      {location: ['28%', '73%']},
      {location: ['70%', '60%']},
      {location: ['35%', '18%']},
    ],
  ],
  clue: [
    [
      {
        name: 'pillow',
        start_index: [6, 402],
        isdetected: 0, // 조사한지
      },
      {
        name: 'guitar',
        start_index: [5, 402],
        isdetected: 0, // 조사한지
      },
    ],
    [
      {
        name: 'desk',
        start_index: [4, 502],
        isdetected: 0, // 조사한지
      },
      {
        name: 'book',
        start_index: [1, 502],
        isdetected: 0, // 조사한지
      },
      {
        name: 'pen',
        start_index: [2, 502],
        isdetected: 0, // 조사한지
      },
      {
        name: 'chair',
        start_index: [3, 502],
        isdetected: 0, // 조사한지
      },
    ],
    [
      {
        // 얘 나중에 금고로 바꿔야함
        name: 'table',
        start_index: [7, 302],
        isdetected: 0, // 조사한지
      },
    ],
  ],
  backgroundsetting: [
    {
      index: 0,
      location: ['45%', '37%'],
      size: ['20%', '20%'],
      bgimage: require('../images/background/chapter3/bedroom.png'),
    },
    {
      index: 1,
      location: ['48%', '0%'],
      size: ['35%', '30%'],
      bgimage: require('../images/background/chapter3/desk.png'),
    },
    {
      index: 2,
      location: ['32%', '68%'], // 버튼 위치
      size: ['15%', '40%'], // 버튼 사이즈
      bgimage: require('../images/background/chapter3/closet.png'),
    },
  ],
  scripts: [
    {
      name: '배교수',
      text: '피해자의 방을 봐야겠어. 단서가 나올지도 모르겠군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '나는 교수님과 함께 피해자의 방을 확인하러 들어갔다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: '',
      text: '들어간 순간 교수님과 나는 눈을 의심할 수 밖에 없었다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: '',
      text: '피해자의 방이 마치 데칼코마니를 이용한 예술 작품처럼 완벽하게 대칭으로 이루어져 있었기 때문이었다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: '배교수',
      text: ' 이건 마치...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '틀린 그림 찾기 같군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '교수님이 말씀하신대로 이 방은 마치 틀린 그림 찾기 같다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: '',
      text: '이 방에서 어떤 단서들을 더 찾을 수 있을까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: 'end',
      text: 'end',
      bg: 0,
    },
    {
      name: 'end',
      text: 'end',
      bg: 0,
    },
    {
      name: '조사관',
      text: '교수님, CCTV 파일 확보했습니다.',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 100,
      position: [3],
      //examiner/body/happy/right.png
      character: [require('../images/character/examiner/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '감사합니다. CCTV 영상을 볼 수 있는 화면이 필요할 것 같은데, 모니터 또는 노트북이 이 근처에 있습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '조사관',
      text: '네 저희가 화면 촬영을 위해 모니터를 가지고 왔습니다.',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '이걸로 볼 수 있겠군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '음... 현관문 쪽은 나오지 않는군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '조사관',
      text: '아무래도 프라이버시 보장 문제랑 도어락 비밀번호 노출 문제 때문에 계단과 엘리베이터만 촬영하는 것 같습니다.',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '여러분이 말씀해주신대로 12시에 엘리베이터를 타셨고, 세영씨는 5분 뒤에 엘리베이터를 타셨군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '잠깐, 여기 12시 10분에 엘리베이터 탄 사람, 임이지씨 아닌가요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        //prof/body/happy/left.png
        //examiner/body/happy/right.png
        require('../images/character/prof/body/less/left_camera.png'),
        require('../images/character/prof/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '임이지',
      text: '...',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/limij/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '임이지씨, 오종오씨와의 통화 후에 오종오씨 집에 왔었습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '임이지',
      text: '... 네... 종오 오빠가 불러서 잠시 할 말이 있다고 하더라구요.',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '임이지',
      text: '제가 통화로 하라고 하니까 종오 오빠가 만나서 해야 한다고 해서... 가게 됐어요.',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: ' 만나서 무슨 얘기를 나누셨죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '임이지',
      text: '그냥 오늘 있었던 일이랑... 그리고 내일 같이 밥 먹을지 물어봤어요. 저는 거절했지만요.',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '음... 네 알겠습니다. 그리고 1분만에 다시 밖으로 나오셨군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '임이지',
      text: '네...',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/limij/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '그리고 말씀해주신대로 12시 30분에 임시윤씨가 엘리베이터를 탔고, 곧바로 내려가는 엘리베이터를 타셨네요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '임시윤',
      text: '맞아요',
      img: require('../images/character/limsy/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/limsy/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '네 좋습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '....',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [
        require('../images/character/prof/body/less/left_camera.png'),
      ],
      bg: 0,
    },
    {
      name: '배교수',
      text: '어? 잠시만요! 이 사람은 오종오씨 아닌가요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '김세영',
      text: '맞는 것 같습니다!',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/kimsy/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '엘리베이터를 탔다가 다시 바로 내렸군요. 아마 무언가 두고 온 걸 깜빡해서 다시 집으로 들어간 거 같은데...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '그 이후로는 다시 엘리베이터를 타지 않았습니다...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '교수님이 말씀하신대로 임시윤씨가 마지막으로 오종오씨를 본 지 얼마 안 돼서 오종오씨도 엘리베이터를 탔다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: '',
      text: '그러나 엘리베이터에서 바로 내렸고, 그 이후로는 피해자와 용의자의 모습은 보이지 않았다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: '배교수',
      text: '그럼 이 CCTV에 나온 정보들을 참조해서 조사를 진행하겠습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '현장 조사가 모두 끝났습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '아마 오종오씨는 독살로 죽었을 가능성이 높습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '그리고 여기 계신 여러분은 어제 오종오씨와의 만남을 가졌기 때문에 용의 선상에 올려놓고 조사를 진행할 수 밖에 없습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '그럼 더 자세한 조사를 위해 모임 후에 각자 돌아간 장소인 여러분의 집을 조사해야겠습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '혐의를 벗기 위해선 조사에 임해주셔야 합니다. 양해 부탁드리겠습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: 'end',
      text: 'gotoMain',
      bg: 0,
    },
    // 단서들이 겹치거나 없을 때 나오는 대사
    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 301,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: 'end',
      text: 'end',
      bg: 3,
    },
    {
      name: 'end',
      text: 'end',
      bg: 3,
    },
    {
      name: '배교수',
      text: '그 단서는 이미 찾은 단서야. 다른 단서를 찾아보도록 하지!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 302,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: 'end',
      text: 'end',
      bg: 3,
    },
    {
      name: 'end',
      text: 'end',
      bg: 3,
    },
    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 401,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },
    {
      name: '배교수',
      text: '그 단서는 이미 찾은 단서야. 다른 단서를 찾아보도록 하지!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 402,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },
    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 501,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: '배교수',
      text: '그 단서는 이미 찾은 단서야. 다른 단서를 찾아보도록 하지!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 502,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },

    // 모달 창에 띄울 대사들
    // 책상
    // 책이나 공책을 촬영하면 나오는 대사
    {
      name: '',
      text: '화학공학과에서 듣는 수업의 책들인 것 같다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 1,
      position: [],
      character: [],
      bg: 5,
    },
    {
      name: '',
      text: '책에 끼워진 책갈피의 색깔이 매우 바래져 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },

    // 볼펜, 샤프, 연필, 만년필을 촬영하면 나오는 대사
    {
      name: '배교수',
      text: '책에 끼워진 책갈피의 색깔이 매우 바래져 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 2,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 5,
    },
    {
      name: '배교수',
      text: '헌데 잉크가 남아 있지는 않은 것 같군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },

    // 의자를 촬영하면 나오는 대사
    {
      name: '',
      text: '피해자가 사용하던 의자다. 책상의 정중앙에 넣어져 있었다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 3,
      position: [],
      character: [],
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },

    // 책상을 촬영하면 나오는 대사
    {
      name: '',
      text: '피해자가 사용하던 책상이다. 책상도 좌우 대칭이 맞는 것으로 사용하고 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 4,
      position: [],
      character: [],
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },
    {
      name: 'end',
      text: 'end',
      bg: 5,
    },

    // 침대
    // 기타 촬영하면 나오는 대사
    {
      name: '',
      text: '기타가 왜 이불 위에 놓여져 있는 것을 보니 아마도 어제 모임에서 기타 연주를 했던 것 같다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 5,
      position: [],
      character: [],
      bg: 4,
    },
    {
      name: '',
      text: '피해자는 기타를 즐겨 쳐서 손톱을 그렇게 짧게 잘랐던 건가?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },

    // 침대, 베게, 이불 촬영
    {
      name: '',
      text: '피해자가 쓰던 침구류인 것 같다. 별다른 흔적은 보이지 않는다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 6,
      position: [],
      character: [],
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },
    {
      name: 'end',
      text: 'end',
      bg: 4,
    },

    // 옷장
    // 금고
    {
      name: '배교수',
      text: '잠깐!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 7,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '... 이건 전자담배에 넣는 니코틴 액상 같은데?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '원칙적으론 전자담배에 쓰이는 니코틴 액상은 농도가 1% 이상인 것을 판매할 순 없지만...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [
        require('../images/character/prof/body/less/left_camera.png'),
      ],
      bg: 3,
    },
    {
      name: '배교수',
      text: '이건 시중에 파는 것과는 달라 보이는군. 아마 니코틴 비중을 높인 것을 다른 경로로 구매한 것 같아.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [
        require('../images/character/prof/body/less/left_camera.png'),
      ],
      bg: 3,
    },
    {
      name: '배교수',
      text: '니코틴 원액은 한 방울만으로도 사람을 죽일 수 있지. 극소량을 섭취해도 사망에 이를 수 있어.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [
        require('../images/character/prof/body/less/left_camera.png'),
      ],
      bg: 3,
    },
    {
      name: '배교수',
      text: '국과수에서 검사를 해봐야 정확히 알겠지만... 이게 범행에 쓰였을 확률이 높아.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [
        require('../images/character/prof/body/less/left_camera.png'),
      ],
      bg: 3,
    },
    {
      name: '배교수',
      text: '혹시 이 니코틴 액상에 대해 아시는 분 계십니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: '임이지',
      text: '그건 전자담배에 쓰는 니코틴 액상 아닌가요? 종오 오빠가 전자담배를 피거든요.',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/limij/body/whole.png')],
      bg: 3,
    },
    {
      name: '백지현',
      text: '종오가 평소에 전자담배에 충전하던 니코틴 액상인데... 사실은 니코틴 원액이에요. 전자담배에 쓸 땐 희석해서 넣었구요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2, 3],
      character: [
        //baekjh/body/less/right_camera.png
        require('../images/character/limij/body/whole.png'),
        require('../images/character/baekjh/body/whole.png'),
      ],
      bg: 3,
    },
    {
      name: '배교수',
      text: '왜 원액을 가지고 있었던거죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 3,
    },
    {
      name: '백지현',
      text: '그건... 종오가 니코틴 농도가 높은 것을 좋아하기도 했고...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // baekjh/body/less/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/baekjh/body/whole.png'),
      ],
      bg: 3,
    },
    {
      name: '백지현',
      text: '사실 종오가 가끔 우울증 증상도 나타났는데 그때 극단적 선택을 할 때 쓸 거라고 하더라구요...',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // baekjh/body/sad/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/baekjh/body/whole.png'),
      ],
      bg: 3,
    },
    {
      name: '백지현',
      text: '저는 그러지 말라고 극구 말렸지만 자꾸 몰래 구해 놓으니 소용이 없었어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // baekjh/body/sad/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/baekjh/body/whole.png'),
      ],
      bg: 3,
    },
    {
      name: '배교수',
      text: '그렇군요. 말씀해주셔서 감사합니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // baekjh/body/sad/right.png
        require('../images/character/prof/body/whole.png'),
        require('../images/character/baekjh/body/whole.png'),
      ],
      bg: 3,
    },
    {
      name: '',
      text: '교수님이 말씀을 끝내신 후 나를 불러 세웠다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 3,
    },
    {
      name: '배교수',
      text: '이 니코틴이 범행에 쓰였을 확률이 높아.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '우리가 그 금고를 열 수 있었던 것처럼 다른 사람들도 얼마든지 열 수 있었을 거야.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '다만 감식반 말에 의하면 사체를 제외한 모든 곳에서 니코틴의 흔적이 발견되진 않았다는군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '분명 어떤 트릭이 숨겨져 있을 거야.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '이러한 계획적 살인은 항상 범행 동기가 따라오기 마련이지.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: '배교수',
      text: '용의자들의 집에서 단서가 나올만한 것은 없는지, 또 피해자와는 어떤 관계였는지를 밝혀보자구.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
    },
    {
      name: 'end',
      text: 'end',
      bg: 3,
    },
    {
      name: 'end',
      text: 'end',
      bg: 3,
    },
  ],
};

export default e103;
