import { View, StyleSheet } from 'react-native';
// import Player from './Player'; // Asegúrese de que la ruta al componente Player sea correcta

const PlayersGrid = ({ currentLayout, screenState, screen_id, ip, setLoading, socket }) => {
  return (
    <View style={[gridStyles.general.playersGrid, gridStyles.layouts[currentLayout.name]?.grid]}>
      {
        Array.from({ length: currentLayout.screens }).map((item, index) => {
          const subScreenIndex = index + 1;
          return (
            <View style={[gridStyles.general.gridItem, gridStyles.layouts[currentLayout.name][`gridItem${subScreenIndex}`]]} key={`screen_${screen_id}_gridItem${subScreenIndex}`}>
              {/* <Player 
                subScreenState={screenState[subScreenIndex] || null} 
                audioPermission={audioPermission} 
                screen_id={screen_id} 
                subscreen_index={subScreenIndex} 
                ip={ip} 
                setLoading={setLoading} 
                socket={socket} 
              /> */}
            </View>
          );
        })
      }
    </View>
  );
};

const gridStyles = {
    general : StyleSheet.create({
    playersGrid: {
    backgroundColor: "#00c3ff",
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    gridItem: {
      borderColor: "#000000",
      borderWidth: 5,
      backgroundColor: "#58D858",
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }),
  layouts: {
    grid3ScreensBigTopScreen: StyleSheet.create({
            gridItem1: {
              flexBasis: '100%',
              height: '50%',
            },
            gridItem2: {
              flexBasis: '50%',
              height: '50%',
            },
            gridItem3: {
              flexBasis: '50%',
              height: '50%'
            }
    }),
    FullScreen: StyleSheet.create({
            gridItem1: {
              flexBasis: '100%',
              height: '100%'
            }}),
    grid4ScreensBigRightScreen: StyleSheet.create({
            grid : {
                flexDirection: 'column',
                flexWrap: 'wrap'
            },
            gridItem1: {
              flexBasis: '33%',
              width: "50%"
            },
            gridItem2: {
              flexBasis: '34%',
              width: "50%"
            },
            gridItem3: {
              flexBasis: '33%',
              width: "50%"
            },
            gridItem4: {
              flexBasis: '100%',
              width: "50%"
            }
    }),
    grid4Screens: StyleSheet.create({
            gridItem1: {
              flexBasis: '50%',
              height: "50%"
            },
            gridItem2: {
              flexBasis: '50%',
              height: "50%"
            },
            gridItem3: {
              flexBasis: '50%',
              height: "50%"
            },
            gridItem4: {
              flexBasis: '50%',
              height: "50%"
            }
    })
    }
}

export default PlayersGrid;