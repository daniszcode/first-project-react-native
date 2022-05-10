import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../Home/styles";

const Button = ({ onPress }) => (
  <View>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.p}> Adicionar </Text>
    </TouchableOpacity>
  </View>
);
export { Button };
