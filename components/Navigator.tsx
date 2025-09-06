import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Navigator() {
  const router = useRouter();
  const pathname = usePathname();

  type AppRoute = "/" | "/vocab" | "/book" | "/ranking" | "/login";

  const tabs: {
    name: string;
    route: AppRoute;
    icon: string;
    iconActive: string;
  }[] = [
    { name: "home", route: "/", icon: "home-outline", iconActive: "home" },
    {
      name: "vocab",
      route: "/vocab",
      icon: "book-outline",
      iconActive: "book",
    },
    {
      name: "book",
      route: "/book",
      icon: "library-outline",
      iconActive: "library",
    },

    {
      name: "ranking",
      route: "/ranking",
      icon: "trophy-outline",
      iconActive: "trophy",
    },
    {
      name: "profile",
      route: "/login",
      icon: "person-outline",
      iconActive: "person",
    },
  ];

  return (
    <View style={styles.navigator}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.route;
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => router.push({ pathname: tab.route })}
            style={styles.iconWrapper}
          >
            <Ionicons
              name={(isActive ? tab.iconActive : tab.icon) as any}
              size={28}
              color={isActive ? "#ACCCFF" : "#CDD3DD"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
