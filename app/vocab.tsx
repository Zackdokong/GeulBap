import Navigator from "@/components/Navigator";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type VocabItem = {
  date: string;
  title: string;
  description: string;
  example: string;
};

const vocabData: { [key: string]: VocabItem[] } = {
  "07/15": [
    {
      date: "07/15",
      title: "세수",
      description: "정부가 세금을 거두면서 얻은 돈의 총액",
      example: "ex) 근로소득세가 늘면서 전체 세수도 크게 증가했다.",
    },
    {
      date: "07/15",
      title: "기본 공제",
      description:
        "세금을 계산할 때 과세 대상 소득에서 일정 금액을 먼저 빼주는 것",
      example:
        "ex) 정부가 기본 공제를 줄이면 월급 직장인들의 세금이 더 나올 거야.",
    },
    {
      date: "07/15",
      title: "과세표준",
      description: "세금을 계산할 때 세율을 적용하는 기준이 되는 금액",
      example:
        "ex) 과세표준이 낮아지면 더 낮은 세율이 적용돼 세금이 줄어들 수 있어.",
    },
  ],
  "07/14": [
    {
      date: "07/14",
      title: "금융",
      description: "자금을 융통하는 일, 돈의 흐름",
      example: "ex) 금융 시장이 불안정하면 투자자들이 위축된다.",
    },
  ],
};

export default function VocabScreen() {
  return (
    <View style={styles.container}>
      {/* 스크롤 되는 부분 */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>단어장</Text>
        <Text style={styles.subHeader}>
          질문을 풀면서 어려웠던 단어들을 다시 확인할 수 있어요.
        </Text>

        {Object.keys(vocabData).map((date) => (
          <View key={date} style={styles.section}>
            <Text style={styles.date}>{date}</Text>
            {vocabData[date].map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.highlightWrapper}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.highlightUnderline} />
              </View>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.example}>{item.example}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* 네비게이터 고정 */}
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    marginBottom: 48,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 92,
    paddingBottom: 80, // 네비게이터 높이만큼 여백 확보
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  date: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 24,
  },
  example: {
    fontSize: 13,
    color: "#6B7280",
    fontStyle: "italic",
    marginBottom: 12,
  },
  highlightWrapper: {
    position: "relative",
    alignSelf: "flex-start",
  },
  highlightUnderline: {
    position: "absolute",
    bottom: 9, // 글씨와 살짝 겹치게
    left: 0,
    right: 0,
    height: 7, // 형광펜 두께
    backgroundColor: "#92BAFF",
    opacity: 0.5,
  },
});
