// BestScreen.tsx
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type RootStackParamList = {
  Home: undefined;
  Ranking: undefined;
  Vocab: undefined;
  Book: undefined;
  Profile: undefined;
  Login: undefined;
  AnalyzedScreen: undefined;
  WordScreen: undefined;
  BestScreen: undefined;
  LoadingScreen: undefined;
};

type BestScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BestScreen"
>;

export default function BestScreen() {
  const navigation = useNavigation<BestScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 제목 */}
        <Text style={styles.title}>다른 사용자들은 이렇게 답했어요.</Text>
        <Text style={styles.subtitle}>
          동일한 질문에 다른 유저들은 어떻게 답했는지{"\n"}우수 답안 사례를
          확인하세요.
        </Text>

        {/* 답안 카드 */}
        <View style={styles.answerCard}>
          <Text style={styles.answerBadge}>👑 무럭무럭</Text>
          <Text style={styles.answerText}>
            근로소득세가 범인세를 넘어 직장인 세금 부담이 과하다는 지적이
            나오고, 물가 상승에도 과세표준과 공제액이 그대로라 실질 부담이
            늘었다. 이에 기본공제와 소득세 구간을 조정해야 한다는 목소리가
            나오고 있다.
          </Text>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() =>
          navigation.popToTop()
        }
      >
        <Text style={styles.bottomButtonText}>학습 완료하기</Text>
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#777",
    marginBottom: 30,
    lineHeight: 20,
  },
  answerCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
  },
  answerBadge: {
    fontSize: 13,
    fontWeight: "700",
    color: "#444",
    marginBottom: 10,
  },
  answerText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
  bottomButton: {
    backgroundColor: "#E5EEFF",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  bottomButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
  },
});
