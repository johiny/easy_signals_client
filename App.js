import ReactNPaperWrapper from './components/ReactNPaperWrapper';
import Main from './views/Main';
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    lockOrientation();
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