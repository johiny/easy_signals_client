import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
  },
};

const ReactNPaperWrapper = ({children}) => {
  return (
        <PaperProvider theme={customTheme}>
          {children}
        </PaperProvider>
  )
}

export default ReactNPaperWrapper