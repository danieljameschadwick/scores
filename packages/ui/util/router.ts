import { Platform } from "react-native";
import { useRouter as useNextRouter, NextRouter } from "next/router";
import { useNavigation } from "@react-navigation/native";
import { System } from "@scores/types/enum/System";
;
export const useRouter = (): NextRouter | any => {
  const platform = Platform.OS;

  if (
    platform === System.ANDROID ||
    platform === System.iOS
  ) {
    return appRouter();
  }

  return webRouter();
};

const webRouter = (): NextRouter => {
  return useNextRouter();
};

// @TODO: figure out typing
const appRouter = (): any => {
  return useNavigation();
};

// @TODO: figure routing structure
//   - hard coded links across frontend/app shared in http?
//   - define key in http, and then map that to the platform?
