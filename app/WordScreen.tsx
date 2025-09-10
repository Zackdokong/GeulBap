// WordScreen.tsx
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WordScreen() {
  const navigation = useNavigation<any>(); 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 제목 */}
        <Text style={styles.title}>어려웠던 단어 확인하기</Text>
        <Text style={styles.subtitle}>
          지문을 읽으면서 어려웠던 단어들을 다시 확인할 수 있어요.
        </Text>

        {/* 단어 카드 리스트 */}
        <WordCard word="세수" desc="정부가 세금을 거둬들여서 얻은 돈의 총액" example="ex) 근로소득세가 늘면서 전체 세수도 크게 증가했다." />
        <WordCard word="기본 공제" desc="세금을 계산할 때 과세 대상 소득에서 일정 금액을 먼저 빼주는 것" example="ex) 정부가 기본 공제 금액을 올리면 직장인은 세금이 덜 나올 거야." />
        <WordCard word="과세표준" desc="세금을 계산할 때 세율을 적용하는 기준이 되는 금액" example="ex) 과세표준이 높아지면 더 높은 세율이 적용돼 세금을 더 내야 할 수 있어." />
      </ScrollView>

      {/* 하단 버튼 */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate("BestScreen")}
      >
        <Text style={styles.bottomButtonText}>우수 예시 답안 보러가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// WordCard 컴포넌트 (하이라이트 언더라인 적용)
function WordCard({ word, desc, example }: { word: string; desc: string; example: string }) {
  const [textWidth, setTextWidth] = useState(0);

  return (
    <View style={styles.wordCard}>
      <View style={styles.highlightWrapper}>
        <Text
          style={styles.wordTitle}
          onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
        >
          {word}
        </Text>
        <View
          style={[
            styles.highlightUnderline,
            { width: textWidth }
          ]}
        />
      </View>
      <Text style={styles.wordDesc}>
        {desc}{"\n"}
        <Text style={styles.example}>{example}</Text>
      </Text>
    </View>
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
    paddingBottom: 120, // 버튼에 가려지지 않도록 충분한 여백
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 6,
    marginBottom: 50,
  },
  wordCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 24,
  },
  highlightWrapper: {
    position: "relative",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  wordTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  highlightUnderline: {
    position: "absolute",
    bottom: 0, // 글자 바로 아래
    left: 0,
    height: 10,
    backgroundColor: "#92BAFF",
    opacity: 0.4,
  },
  wordDesc: {
    fontSize: 14,
    color: "#444",
    lineHeight: 21,
  },
  example: {
    fontSize: 13,
    color: "#777",
  },
  bottomButton: {
    backgroundColor: "#E5EEFF",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
});
