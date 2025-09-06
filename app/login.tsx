import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* 로고 */}
      <Text style={styles.logo}>Geulbap</Text>

      {/* 이메일 입력 */}
      <TextInput
        style={styles.input}
        placeholder="이메일 주소 또는 아이디"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      {/* 비밀번호 입력 */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="비밀번호"
          placeholderTextColor="#aaa"
          secureTextEntry={secure}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => setSecure(!secure)}>
          <Ionicons name={secure ? "eye-off" : "eye"} size={20} color="#666" />
        </Pressable>
      </View>

      {/* 로그인 상태 유지 */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={keepLoggedIn}
          onValueChange={setKeepLoggedIn}
          color={keepLoggedIn ? "#DFEAFB" : undefined}
        />
        <Text style={styles.checkboxLabel}>로그인 상태 유지</Text>
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/profile")}>
        <Text style={styles.loginButtonText}>로그인하기</Text>
      </TouchableOpacity>

      {/* 아이디/비밀번호 찾기 */}
      <View style={styles.linksContainer}>
        <Text style={styles.link}>아이디찾기</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.link}>비밀번호 찾기</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.link}>회원가입</Text>
      </View>

      {/* SNS 로그인 */}
      <Text style={styles.snsTitle}>SNS 계정으로 로그인하기</Text>
      <View style={styles.snsContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/kakaologo.png")}
            style={styles.snsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/googlelogo.png")}
            style={styles.snsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/naverlogo.png")}
            style={styles.snsIcon}
          />
        </TouchableOpacity>
        <Ionicons name="logo-apple" size={32} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ACCCFF",
    marginBottom: 40,
  },
  snsSection: {
    alignItems: "center",
    marginTop: 20,
  },
  snsTitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 12,
  },
  snsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  snsIcon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    borderRadius: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  passwordContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#444",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#DFEAFB",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "500",
  },
  linksContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  link: {
    fontSize: 14,
    color: "#555",
  },
  divider: {
    marginHorizontal: 8,
    color: "#aaa",
  },
});
