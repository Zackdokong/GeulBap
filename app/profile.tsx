import Navigator from "@/components/Navigator";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* 프로필 영역 */}
        <View style={styles.profileSection}>
          <Ionicons name={"person-outline"} size={36} />
          <View>
            <Text style={styles.username}>끝판왕화이팅</Text>
            <Text style={styles.userid}>@MURUK</Text>
          </View>
        </View>

        {/* 메뉴 리스트 */}
        <View style={styles.menuSection}>
          <MenuItem title="회원정보 수정" />
          <MenuItem title="학습데이터 저장" />
          <MenuItem title="학습데이터 초기화" />
          <MenuItem title="문의하기 / 고객센터" />
          <MenuItem title="개인정보 처리방침" />
          <MenuItem title="버전정보 1.0.18" />
        </View>

        {/* 로그아웃 버튼 */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navigator />
    </View>
  );
}

function MenuItem({ title }: { title: string }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>{title}</Text>
      <Text style={styles.arrow}>{">"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 48,
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    gap: 12,
    marginLeft: 48,
    marginTop: 48,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userid: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  arrow: {
    fontSize: 16,
    color: "#aaa",
  },
  logoutButton: {
    margin: 20,
    backgroundColor: "#f2f2f2",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "#333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 30,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 14,
    color: "#666",
  },
});
