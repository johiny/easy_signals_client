import Main from './views/Main';
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import {StatusBar} from 'react-native';
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
    <>
      <StatusBar hidden/>
      <Main/>
    </>
  );
}