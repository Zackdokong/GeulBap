// BestScreen.tsx
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
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

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 80; // 좌우 여백 남겨서 옆 카드 살짝 보이게

const answers = [
  {
    badge: "👑 무럭무럭",
    text: `근로소득세가 처음으로 법인세보다 많아지면서, 월급쟁이들의 세금 부담이 과하다는 지적과 함께 소득세 기준과 공제를 손봐야 한다는 의견이 나왔다.`,
  },
  {
    badge: "👑 바람돌이",
    text: `지난해 근로소득세 수입이 법인세를 추월하며 직장인들의 세 부담이 과중하다는 논의가 제기됐다. 물가 상승에도 과세표준과 공제가 그대로여서 부담이 늘어나 세법 개편 필요성이 거론된다.`,
  },
  {
    badge: "👑 한줄요약킹",
    text: `근로소득세가 범인세를 넘어 직장인 세금 부담이 과하다는 지적이 나오고, 물가 상승에도 과세표준과 공제액이 그대로라 실질 부담이 늘었다. 이에 기본공제와 소득세 구간을 조정해야 한다는 목소리가 나오고 있다.`,
  },
];

export default function BestScreen() {
  const navigation = useNavigation<BestScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      {/* 제목 */}
      <Text style={styles.title}>다른 사용자들은 이렇게 답했어요.</Text>
      <Text style={styles.subtitle}>
        동일한 질문에 다른 유저들은 어떻게 답했는지{"\n"}우수 답안 사례를
        확인하세요.
      </Text>

      {/* 답안 카드들 - FlatList */}
      <FlatList
        data={answers}
        horizontal
        pagingEnabled={false} // 직접 snap으로 제어
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH} // 카드 폭 + margin
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={[styles.answerCard, { width: CARD_WIDTH }]}>
            <Text style={styles.answerBadge}>{item.badge}</Text>
            <Text style={styles.answerText}>{item.text}</Text>
          </View>
        )}
      />

      {/* 하단 버튼 */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.popToTop()}
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
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 13,
    color: "#777",
    marginBottom: 30,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  answerCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    marginRight: 20,
    height: 200,
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
