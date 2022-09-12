import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRouter } from "next/router";
import Link from "next/link";
import { Z_INDEXES } from "@src/enum/zIndex";
import { ScoresCarousel } from "@src/components/scores/ScoresCarousel";

export const Header: React.FC = () => {
  const router = useRouter();
  const user = null;

  const logout = () => {
    // @TODO: no global app state solution yet
    // dispatch(setTokens(null));
    // dispatch(setStoreUser(null));

    router.push("/");
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href={"/"}>
          <Text style={styles.logoText}>scores</Text>
        </Link>

        <View style={styles.linksContainer}>
          {user ? (
            <>
              <Text
                accessibilityRole="link"
                style={styles.link}
                onPress={() => logout()}
              >
                Logout
              </Text>
            </>
          ) : (
            <>
              <Text
                accessibilityRole="link"
                style={styles.link}
                onPress={() => router.push("/login")}
              >
                Login
              </Text>

              <Text
                accessibilityRole="link"
                style={styles.link}
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
    backgroundColor: "rgb(255,255,255)",
    border: "1px solid rgb(215 220 224)",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  scoreboardContainer: {

  },
  logoText: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "rgb(255,113,0)",
  },
  linksContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  link: {
    padding: 6,
  },
});
