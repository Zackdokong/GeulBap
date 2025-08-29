// components/Text.js
import { Text as DefaultText } from "react-native";

export function Text(props) {
  return (
    <DefaultText
      {...props}
      style={[{ fontFamily: "InterVariable" }, props.style]}
    />
  );
}
