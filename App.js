import ReactNPaperWrapper from './components/ReactNPaperWrapper';
import Main from './views/Main';
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import ImmersiveMode from 'react-native-immersive-mode';
export default function App() {
  useEffect(() => {
    lockOrientation();
    ImmersiveMode.fullLayout(true);
    return () => {
    ImmersiveMode.fullLayout(false);
    }
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }
  return (
    <ReactNPaperWrapper>
    <Main/>
    </ReactNPaperWrapper>
  );
}