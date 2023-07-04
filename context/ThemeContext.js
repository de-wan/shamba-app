import React, { createContext } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorTheme = useColorScheme();
  const appTheme = {
    light: {
      app_bg: '#F5FAF5', // background
      primary: '#13C232', // primary
      warning: '#FFA500', // warning
      danger: '#FF0022', // danger
      blue: '#3D89E0', // blue
      purple: '#7E30FC', // purple
      gray1: '#222', // text_color
      gray2: '#444', // text_color
      gray3: '#666', // text_color
      gray4: '#888', // text_color
      gray5: '#aaa', // text_color
      gray6: '#ddd', // text_color
      wb_color: '#FFFFFF', // white or black
      wb_color1: '#FFFFFF', // white or black
      wb_color2: '#FFFFFF', // white or black
      wb_color3: '#FFF',
      inverted: '#000', // color 4 opposite
    },
    dark: {
      app_bg: '#222',
      primary: '#70DB87',
      warning: '#F4BE37', // warning
      danger: '#EB4C61', // danger
      blue: '#3D89E0', // blue
      purple: '#7E30FC', // purple
      gray1: '#ccc', // text_color
      gray2: '#aaa', // text_color
      gray3: '#888', // text_color
      gray4: '#666', // text_color
      gray5: '#444', // text_color
      gray6: '#666', // text_color
      wb_color: '#000', // white or black
      wb_color1: '#444', // white or black
      wb_color2: '#666', // white or black
      wb_color3: '#888', // white or black
      inverted: '#FFF', // color 4 opposite
    },
  };
  const theme = appTheme[colorTheme];

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
