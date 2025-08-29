import Navigator from "@/components/Navigator";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RankingScreen() {
  const rankingData = [
    { id: "1", name: "끝판왕", score: 801025 },
    { id: "2", name: "umm로이", score: 800977 },
    { id: "3", name: "dukong", score: 800005 },
    { id: "4", name: "22승준", score: 798058 },
    { id: "5", name: "ioz", score: 776540 },
    { id: "6", name: "윤스님", score: 759756 },
    { id: "7", name: "브라키오사우르스", score: 758970 },
    { id: "8", name: "ㅋㅋㅋ", score: 1111 },
  ];

  const top3 = rankingData.slice(0, 3);
  const others = rankingData.slice(3);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", marginBottom: 48, }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: 40 }}>
        <Text style={styles.title}>이번 달 내 학습 순위는?</Text>
        <Text style={styles.subtitle}>
          문제의 학습 성과를 합산하여 순위가 정해져요.
        </Text>

        {/* TOP 3 */}
        <View style={styles.topContainer}>
          {/* 2위 */}
          <View style={styles.topItem}>
            <MaterialCommunityIcons name="crown" size={28} color="#C0C0C0" />
            <View style={styles.medalBox}>
              <Image
                source={require("@/assets/images/profile_black.png")}
                style={styles.avatar}
              />
              <Text style={styles.name}>{top3[1].name}</Text>
              <Text style={styles.score}>{top3[1].score.toLocaleString()}</Text>
            </View>
          </View>

          {/* 1위 */}
          <View style={[styles.topItem, styles.first]}>
            <MaterialCommunityIcons name="crown" size={28} color="#FFD700" />
            <View style={styles.medalBox}>
              <Image
                source={require("@/assets/images/profile_black.png")}
                style={styles.avatar}
              />
              <Text style={styles.name}>{top3[0].name}</Text>
              <Text style={styles.score}>{top3[0].score.toLocaleString()}</Text>
            </View>
          </View>

          {/* 3위 */}
          <View style={styles.topItem}>
            <MaterialCommunityIcons name="crown" size={28} color="#CD7F32" />
            <View style={styles.medalBox}>
              <Image
                source={require("@/assets/images/profile_black.png")}
                style={styles.avatar}
              />
              <Text style={styles.name}>{top3[2].name}</Text>
              <Text style={styles.score}>{top3[2].score.toLocaleString()}</Text>
            </View>
          </View>
        </View>

        {/* 나머지 순위 */}
        {others.map((item, index) => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.rank}>
              {(index + 4).toString().padStart(2, "0")}
            </Text>
            <Image
              source={require("@/assets/images/profile_black.png")}
              style={styles.rowAvatar}
            />
            <Text style={styles.rowName}>{item.name}</Text>
            <Text style={styles.rowScore}>{item.score.toLocaleString()}</Text>
          </View>
        ))}
      </ScrollView>

      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "700", marginLeft: 20, marginTop: 30, marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#888", marginLeft: 20, marginBottom: 20 },
  topContainer: { flexDirection: "row", justifyContent: "space-around", backgroundColor: "#EEF5FF", paddingVertical: 30, marginBottom: 20, width: "100%", paddingTop: 60 },
  topItem: { alignItems: "center", flex: 1 },
  first: { marginTop: -20 },
  medalBox: { backgroundColor: "#fff", paddingHorizontal: 25, paddingVertical: 30, alignItems: "center", borderRadius: 15 },
  avatar: { width: 24, height: 24, marginBottom: 8 },
  name: { fontSize: 14, fontWeight: "600", marginBottom: 4 },
  score: { fontSize: 12, color: "#555" },
  row: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
  rank: { width: 30, fontWeight: "700", fontSize: 14 },
  rowAvatar: { width: 16, height: 16, marginRight: 8 },
  rowName: { flex: 1, fontSize: 14 },
  rowScore: { fontSize: 14, fontWeight: "500" },
});
