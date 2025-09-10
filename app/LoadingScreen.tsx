// LoadingScreen.tsx
import { Ionicons } from "@expo/vector-icons"; // 체크 아이콘
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface LoadingScreenProps {
  loading: boolean;
  showResult: boolean;
  onResultPress?: () => void;
}

export default function LoadingScreen({
  loading,
  showResult,
  onResultPress,
}: LoadingScreenProps) {
  const [done, setDone] = useState(false);
  const navigation = useNavigation<any>(); // 네비게이션 훅 사용

  useEffect(() => {
    if (!loading && showResult) {
      // 로딩 끝나면 2초 후에 체크 아이콘 보여주기
      const timer = setTimeout(() => setDone(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setDone(false);
    }
  }, [loading, showResult]);

  return (
    <SafeAreaView style={styles.fullscreenLoading}>
      {loading && (
        <>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>
            글밥 AI가 답변을 분석 중입니다.
          </Text>
        </>
      )}

      {!loading && !done && showResult && (
        <>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>마무리 중...</Text>
        </>
      )}

      {!loading && done && showResult && (
        <>
          <Ionicons name="checkmark-circle" size={60} color="#4A90E2" />
          <Text style={styles.doneText}>분석이 완료되었습니다!</Text>

          <TouchableOpacity
            style={styles.resultButton}
            onPress={() => navigation.navigate("AnalyzedScreen")} // 함수로 넣어야 함
          >
            <Text style={styles.resultButtonText}>
              분석 및 피드백 보러가기
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreenLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingBottom: 40,
  },
  loadingText: {
    marginTop: 12,
    color: "#555",
    fontSize: 16,
    fontWeight: "600",
  },
  doneText: {
    marginTop: 12,
    color: "#222",
    fontSize: 18,
    fontWeight: "600",
  },
  resultButton: {
    backgroundColor: "#C7DDFF",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    position: "absolute",
    bottom: 60,
  },
  resultButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
});
