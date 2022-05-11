import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "../Home/styles";

type ButtonProps = TouchableOpacityProps;

const Button = ({ ...rest }: ButtonProps) => (
  <View>
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.p}> Adicionar </Text>
    </TouchableOpacity>
  </View>
);
export { Button };
