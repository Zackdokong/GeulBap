import { useFonts } from "expo-font";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Navigator from "../components/Navigator";
import { Text } from "../components/Text"; // 경로 맞춰서
export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    InterVariable: require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });

  if (!fontsLoaded) return null;

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const boxWidth = screenWidth;
  const boxHeight = (339 / 852) * screenHeight;
  return (
    <View style={styles.container}>
      {/* 스크롤 되는 부분 */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 80 }} // 패딩 줘야 네비 안 겹침
        showsVerticalScrollIndicator={false}
      >
        {/* 상단 박스 */}
        <View style={[styles.box, { width: boxWidth, height: boxHeight }]}>
          <Text style={styles.title}>GeulBap</Text>
          <Text style={styles.username}>
            끝판왕 <Text style={styles.nim}>님</Text>
          </Text>
        </View>
        {/* 달력 카드 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>오늘은 2024년 7월 15일 입니다.</Text>
          <View style={styles.weekRow}>
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d, i) => (
              <Text key={i} style={styles.weekDay}>
                {d}
              </Text>
            ))}
          </View>
          <View style={styles.dateRow}>
            {["13", "14", "15", "16", "17", "18", "19"].map((d, i) => (
              <View
                key={i}
                style={[styles.dateBox, d === "15" && styles.dateBoxActive]}
              >
                <Text
                  style={[styles.dateText, d === "15" && styles.dateTextActive]}
                >
                  {d}
                </Text>
              </View>
            ))}
          </View>
          <View
            style={{ height: 1, backgroundColor: "#ddd", marginVertical: 8 }}
          />
          <Text style={styles.goalTitle}>오늘의 목표</Text>
          <View style={styles.goalList}>
            <Text style={styles.goalDot}>• 글밥 3개 학습하기</Text>
            <Text style={styles.goalDot}>• 단어 복습하기</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.goalDot}>•</Text>
              <View
                style={{
                  backgroundColor: "#EEF5FF",
                  borderRadius: 8,
                  paddingHorizontal: 40,
                  paddingVertical: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 3,
                }}
              >
                <Text>+</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 매일 글밥 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>매일 글밥</Text>
          {["사색", "사색"].map((note, i) => (
            <View key={i} style={styles.noteCard}>
              {/* 형광펜 밑줄 처리 */}
              <View style={styles.highlightWrapper}>
                <Text style={styles.noteTitle}>{note}</Text>
                <View style={styles.highlightUnderline} />
              </View>

              <Text style={styles.noteContent}>
                어떤 일이나 현상에 대해 깊이 생각함
              </Text>
              <View style={{ height: 16 }} />
              <Text style={styles.noteExample}>
                ex) 그는 저녁 노을을 보며 사색에 잠겼다.
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 48,
  },
  box: { backgroundColor: "#EEF5FF", paddingLeft: 26, width: "100%" },
  title: {
    color: "#ACCCFF",
    fontSize: 32,
    fontFamily: "InterVariable",
    fontWeight: "900",
    marginTop: 32,
    marginBottom: 32,
  },
  username: { fontSize: 24 },
  nim: { fontSize: 15 },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 16,
    marginTop: -150,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    paddingTop: 24,
    paddingBottom: 24,
  },
  cardTitle: { fontSize: 16, marginBottom: 8, fontWeight: "700" },
  weekRow: { flexDirection: "row", justifyContent: "space-between" },
  weekDay: { flex: 1, textAlign: "center", fontSize: 12, color: "#555" },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  dateBox: { flex: 1, alignItems: "center" },
  dateBoxActive: { backgroundColor: "#EEF5FF", borderRadius: 20 },
  dateText: { fontSize: 14, color: "#000" },
  dateTextActive: {
    color: "#567DFF",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  goalTitle: { marginTop: 8, fontSize: 14, fontWeight: "bold" },
  goalList: { marginTop: 4 },
  goalDot: { fontSize: 14, marginVertical: 2 },
  section: { width: "90%", marginTop: 24 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  noteCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  noteTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  noteContent: { fontSize: 14, marginBottom: 4, marginLeft: 12 },
  noteExample: { fontSize: 12, color: "#999", marginLeft: 12 },
  highlightWrapper: {
    position: "relative",
    alignSelf: "flex-start",
  },
  highlightUnderline: {
    position: "absolute",
    bottom: 5, // 글씨와 살짝 겹치게
    left: 0,
    right: 0,
    height: 7, // 형광펜 두께
    backgroundColor: "#92BAFF",
    opacity: 0.5,
  },
});
