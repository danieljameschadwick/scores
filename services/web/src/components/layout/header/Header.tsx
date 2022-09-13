import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native-web";
import { useRouter } from "next/router";
import Link from "next/link";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Z_INDEXES } from "@src/enum/zIndex";
import { ScoresCarousel } from "@src/components/scores/ScoresCarousel";
import { useAppDispatch, useAppSelector } from "@scores/state/hooks";
import { Theme } from "@scores/types/enum/Theme";
import { selectTheme, setTheme } from "@scores/state/reducer/ThemeReducer";
import { getTheme } from "@scores/theme/utils/theme";

export const Header: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  // @TODO: reuse dispatch in getTheme? rather than fetching each time
  const themeStyles = getTheme(theme);
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
    <View style={[styles.container]}>
      <View style={[styles.headerContainer, themeStyles.container]}>
        <Link href={"/"}>
          <Text style={styles.logoText}>scores</Text>
        </Link>

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
      <View>
        <ScoresCarousel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    zIndex: Z_INDEXES.OVERLAY,
    display: "flex",
    flexDirection: "col",
    width: "100%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    padding: 12,
    border: "1px solid rgb(215 220 224)",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
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
