// book.tsx
import { useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const passage = `  세수 에서 차지하는 근로소득세의 비중이 법인세 수입을 넘어서면서, ‘월급쟁이’ 근로자들의 세 부담이 과하다는 지적이 나오고 있다. 물가 상승에도 소득세 과세표준 기준금액과 공제액은 큰 변화 없이 유지되고 있어 실질적인 소득세 부담이 증가해왔다는 판단에서다. 세법 개편을 통해 16년째 제자리로 유지되어 온 기본공제 규모를 늘리고, 소득세 과세표준 구간을 손질해야 할 때가 됐다는 의견이 제기되고 있다. 11일 국세청에 따르면 근로소득세 수입은 지난해 64조2000억원으로 법인세(62조5000억원)를 처음으로 추월했다. 월급을 받는 직장인들의 조세 기여가 기업을 초월한 셈이다. 물가상승률을 따라가지 못하는 명목임금 인상으로 근로소득자의 실질임금은 하락했지만 소득세 부담은 지속해서 늘어왔기 때문이다. 명목임금이 오르는데 소득과표 구간이 그대로 고정돼 있으면 더 높은 세율을 적용받기 때문에 조세부담이 증가한다.`;

export default function BookScreen() {
  const [highlighted, setHighlighted] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [answer, setAnswer] = useState("");

  const words = passage.split(/(\s+)/);

  const toggleHighlight = (index: number) => {
    setHighlighted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0} // iOS notch 대응
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          {/* 헤더 */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>지문 파악하기</Text>
            <Text style={styles.headerSubtitle}>
              다음 지문을 읽고, 이해한 내용을 자유롭게 작성해 주세요
            </Text>
          </View>

          {/* 본문 */}
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.passageBox}>
              <View style={styles.textContainer}>
                {words.map((word, index) => {
                  if (word.trim() === "") {
                    return <Text key={index}>{word}</Text>;
                  }
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => toggleHighlight(index)}
                    >
                      <Text
                        style={[
                          styles.word,
                          highlighted[index] && styles.highlight,
                        ]}
                      >
                        {word}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          {/* 답변 입력 */}
          <View style={styles.answerBox}>
            <TextInput
              style={styles.input}
              multiline
              value={answer}
              onChangeText={setAnswer}
              placeholder="내 답변 작성하기"
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 60,
    marginLeft: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#555",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 16, // 여백만 남기고 절대 answerBox 자리 안 뺌
  },
  passageBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#AFAFAF",
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "900",
  },
  word: {
    fontSize: 14,
    lineHeight: 18,
  },
  highlight: {
    backgroundColor: "#DFEAFB",
  },
  answerBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#AFAFAF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 160,
    margin: 16,
  },
  input: {
    minHeight: 80,
    textAlignVertical: "top",
    fontSize: 16,
  },
});
