import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Progress from 'react-native-progress';
import IngameBarLoading from '../../components/ingame/bar/loading';
import IngameButtonItems from '../../components/ingame/button/items';
import IngameButtonOption from '../../components/ingame/button/option';
import IngameButtonToolbar from '../../components/ingame/button/toolbar';
import IngameTextTitle from '../../components/ingame/text/title';
import ModalBacklog from '../../components/modal/backlog/page';
import ModalDialog from '../../components/modal/dialog/page';
import ModalGotomain from '../../components/modal/gotomain/page';
import ModalInventory from '../../components/modal/inventory/page';
import ModalOption from '../../components/modal/option/page';
import ModalTool from '../../components/modal/tool/page';
import * as RNFS from 'react-native-fs';

import e101 from '../../data/e101.js';

function IngamePage(props) {
  console.log('props data', props);
  console.log('important', props.route.params.name);
  const [nameOrder, setNameOrder] = useState(0);

  const [isReady, setReady] = useState(false);
  const [toolState, setToolState] = useState(false);
  const [optionState, setOptionState] = useState(false);
  const [dialogState, setDialogState] = useState(true);
  const [titleState, setTitleState] = useState(false);
  const [backlogState, setBacklogState] = useState(false);
  const [inventoryState, setInventoryState] = useState(false);
  const items = ['1', '2'];
  const [dialog, setDialog] = useState();

  const orderIncrease = () => {
    setNameOrder(nameOrder + 1);
  };

  const onFinish = () => setReady(true);

  //json불러오기
  const dataa = e101;
  const epiImgBg = dataa.setting.chapterbg;
  console.log(epiImgBg);
  useEffect(() => {
    setTimeout(() => {
      onFinish();
    }, 3000);
  });

  return isReady ? (
    <TouchableOpacity activeOpacity={1} onPress={orderIncrease}>
      <ImageBackground
        source={epiImgBg}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.leftbox}>
          <IngameButtonOption setstate={setOptionState} />
        </View>
        <ModalOption
          visible={optionState}
          hideModalContentWhileAnimating={true}
          setter={setOptionState}
        />
        <View style={styles.toolbox}>
          <IngameButtonToolbar state={toolState} setstate={setToolState} />
          <ModalTool
            state={toolState}
            titlestate={setTitleState}
            backlogstate={setBacklogState}
            inventorystate={setInventoryState}
          />
        </View>
        <ModalInventory
          visible={inventoryState}
          hideModalContentWhileAnimating={true}
          setter={setInventoryState}
          items={items}
        />
        <ModalGotomain
          visible={titleState}
          hideModalContentWhileAnimating={true}
          setter={setTitleState}
        />
      </ImageBackground>
    </TouchableOpacity>
  ) : (
    <ImageBackground source={epiImgBg} style={{width: '100%', height: '100%'}}>
      <View style={styles.loadingbox}>
        <IngameTextTitle
          name={props.route.params.name}
          episode={props.route.params.episode}
        />

        <IngameBarLoading />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loadingbox: {
    flex: 1,
    justifyContent: 'center',
  },
  leftbox: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  toolbox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // alignItems: "flex-end",
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default IngamePage;
