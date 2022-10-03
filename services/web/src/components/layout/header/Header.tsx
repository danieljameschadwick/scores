import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { useRouter } from "next/router";
import Link from "next/link";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Z_INDEXES } from "@scores/types/enum/zIndex";
import { ScoresCarousel } from "@scores/ui/components/carousel/ScoresCarousel";
import { useAppDispatch, useAppSelector } from "@scores/state/hooks";
import { Theme } from "@scores/types/enum/Theme";
import { selectTheme, setTheme } from "@scores/state/reducer/ThemeReducer";
import { getTheme } from "@scores/theme/utils/theme";

export const Header: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const themeStyles = getTheme();
  const user = null;

  const dispatchTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  const logout = () => {
    // dispatch(setTokens(null));
    // dispatch(setStoreUser(null));
    router.push("/");

    return;
  };

  return (
    <View style={[styles.container, themeStyles.lightContainer]}>
      <View style={[styles.borderedContainer, themeStyles.lightContainer]}>
        <View
          style={[styles.headerContainer, styles.responsiveContainer]}
          dataSet={{ media: ids.responsiveContainer }}
        >
          <TouchableOpacity accessible={true} accessibilityRole={"link"}>
            <Link href={"/"}>
              <Text style={styles.logoText}>scores</Text>
            </Link>
          </TouchableOpacity>

          <View style={styles.themeContainer}>
            {theme === Theme.LIGHT_MODE && (
              <TouchableOpacity onPress={() => dispatchTheme(Theme.DARK_MODE)}>
                <IonIcon style={[themeStyles.text]} name={"sunny"} />
              </TouchableOpacity>
            )}
            {theme === Theme.DARK_MODE && (
              <TouchableOpacity onPress={() => dispatchTheme(Theme.LIGHT_MODE)}>
                <IonIcon style={[themeStyles.text]} name={"moon"} />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.linksContainer}>
            {user ? (
              <>
                <Text
                  accessibilityRole="link"
                  style={[styles.link, themeStyles.text]}
                  onPress={() => logout()}
                >
                  Logout
                </Text>
              </>
            ) : (
              <>
                <Text
                  accessibilityRole="link"
                  style={[styles.link, themeStyles.text]}
                  onPress={() => router.push("/login")}
                >
                  Login
                </Text>

                <Text
                  accessibilityRole="link"
                  style={[styles.link, themeStyles.text]}
                  onPress={() => router.push("/register")}
                >
                  Register
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
      <View style={[styles.borderedContainer, themeStyles.lightContainer]}>
        <View
          style={[styles.responsiveContainer]}
          dataSet={{ media: ids.responsiveContainer }}
        >
          <ScoresCarousel />
        </View>
      </View>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    position: "fixed",
    zIndex: Z_INDEXES.OVERLAY,
    display: "flex",
    flexDirection: "col",
    alignItems: "center",
    width: "100%",
  },
  borderedContainer: {
    width: "100%",
    borderBottomWidth: 1,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    padding: 12,
  },
  responsiveContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    "@media (min-width: 1400px)": {
      width: 1400,
      marginHorizontal: "auto",
    },
  },
  logoText: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "rgb(255,113,0)",
  },
  themeContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 10,
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  link: {
    padding: 6,
  },
});
