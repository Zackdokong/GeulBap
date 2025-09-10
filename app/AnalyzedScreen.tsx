import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AnalyzedScreen() {
  const navigation = useNavigation<any>(); 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 제목 */}
        <Text style={styles.title}>분석 및 피드백</Text>
        <Text style={styles.subtitle}>
          글밥 AI를 통해 작성한 답변의 피드백을 받아보세요.
        </Text>

        {/* 요약 문장 박스 */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>
            월급이 오르고 세금 공제가 줄어 근로소득세가 늘어나, 직장인들의 세
            부담이 커졌다.
          </Text>
        </View>

        {/* 피드백 리스트 */}
        <View style={styles.feedbackBox}>
          <View style={styles.highlightWrapper}>
            <Text style={styles.feedbackTitle}>1. 월급이 오르고</Text>
            <View style={styles.highlightUnderline} />
          </View>
          <Text style={styles.feedbackContent}>
            기사에서는 명목임금이 조금 오르긴 했지만 물가 때문에 실질임금은
            줄었다고 했어요. 그런데 요약문은 그냥 “월급이 올랐다”고만 써서, 마치
            사람들이 돈을 많이 벌어서 세금을 더 내게 된 것처럼 읽힐 수 있죠.
          </Text>
        </View>

        <View style={styles.feedbackBox}>
          <View style={styles.highlightWrapper}>
            <Text style={styles.feedbackTitle}>2. “세금 공제가 줄어서”</Text>
            <View style={styles.highlightUnderline} />
          </View>
          <Text style={styles.feedbackContent}>
            실제로는 공제가 줄어든 게 아니라 16년째 그대로 유지되고 있는
            상태예요. 하지만 이렇게 표현하면 정부가 공제를 깎은 것처럼 오해하기
            쉽습니다.
          </Text>
        </View>

        <View style={styles.feedbackBox}>
          <View style={styles.highlightWrapper}>
            <Text style={styles.feedbackTitle}>3. 핵심 원인 누락</Text>
            <View style={styles.highlightUnderline} />
          </View>
          <Text style={styles.feedbackContent}>
            문제의 핵심은 소득세 구간이 고정돼 있어서 세금 부담이 늘어난 건데,
            요약문에는 이 중요한 내용이 빠져 있어요.
          </Text>
        </View>
      </ScrollView>

      {/* 단어 확인하기 버튼 */}
      <TouchableOpacity
        style={styles.wordButton}
        onPress={() => {
          navigation.navigate("WordScreen");
        }}
      >
        <Text style={styles.wordButtonText}>단어 확인하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  scroll: {
    padding: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
    marginBottom: 20,
  },
  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    paddingBottom: 80,
  },
  summaryText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  feedbackBox: {
    marginBottom: 18,
  },
  feedbackTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  feedbackContent: {
    fontSize: 14,
    color: "#444",
    lineHeight: 21,
  },
  wordButton: {
    backgroundColor: "#E5EEFF",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
    left: 20,
    right: 20,
  },
  wordButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  highlightWrapper: {
    position: "relative",
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  highlightUnderline: {
    position: "absolute",
    bottom: 5, // 글자랑 겹치게
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: "#92BAFF",
    opacity: 0.4,
    zIndex: -1,
  },
});
