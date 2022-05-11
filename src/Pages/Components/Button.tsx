import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "../Home/styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => (
  <View>
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.p}> {title} </Text>
    </TouchableOpacity>
  </View>
);
export { Button };
