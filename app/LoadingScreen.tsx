import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2000); // 2초 후 완료
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.fullscreenLoading}>
      {!done ? (
        <>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>
            글밥 AI가 답변을 분석 중입니다.
          </Text>
        </>
      ) : (
        <>
          <Ionicons name="checkmark-circle" size={60} color="#4A90E2" />
          <Text style={styles.doneText}>분석이 완료되었습니다!</Text>

          <TouchableOpacity
            style={styles.resultButton}
            onPress={() => navigation.navigate("AnalyzedScreen")}
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
    paddingHorizontal: 72,
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
