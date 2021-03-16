import { Platform, StatusBar } from "react-native";
import DeviceInfo from 'react-native-device-info';

export const FONT_BOLD = "Poppins-Bold";
export const FONT_LIGHT = "Poppins-Light";
export const FONT_MEDIUM = "Poppins-Medium";
export const FONT_REGULAR = "Poppins-Regular";
export const FONT_SEMI_BOLD = "Poppins-SemiBold";

export const STANDARD_SCREEN_HEIGHT = 740;

export const EXTRA_SMALL_FONT_SIZE_2 = 9;
export const EXTRA_SMALL_FONT_SIZE_1 = 10;
export const EXTRA_SMALL_FONT_SIZE = 12;
export const SMALL_FONT_SIZE = 14;
export const NORMAL_FONT_SIZE = 16;
export const LARGE_FONT_SIZE = 18;
export const EXTRA_LARGE_FONT_SIZE = 20;
export const EXTRA_LARGE_FONT_SIZE_2 = 24;
export const EXTRA_LARGE_FONT_SIZE_3 = 26;
export const PLACE_HOLDER_COLOR = '#B4B4B4';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? 20
    : StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 56;
export const HEADER_BAR_HEIGHT = DeviceInfo.hasNotch() ? STATUSBAR_HEIGHT + APPBAR_HEIGHT : 0;


export const WHITE_COLOR = "white";
export const BLACK_COLOR = "black";
export const THEME_COLOR = "#EDC157";
export const THEME_LIGHT = '#52f5c13b';
export const UNDERLINE_COLOR = "#c3c3c3";

export const ICON_COLOR = "#c3c3c3";
export const GRAY_COLOR = "#d6d8d7";
export const TEXT_GRAY = "#5c5e5c";
export const BACKGROUND_LIGHT_COLOR = "#E5E5E5";
export const BORDER_COLOR = "#E6E6E6";
export const LABEL_COLOR = "#C4C4C4";
export const GREEN_COLOR = "#00C48C";
export const RED_COLOR = "#FF647C";
export const LIGHT_GRAY = "#999999";

export const isObject = (value) => {
    return value !== null && typeof value === 'object'
  }