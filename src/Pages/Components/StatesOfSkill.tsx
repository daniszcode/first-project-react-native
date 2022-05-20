import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "../Home/styles";

interface StatesOfSkillProps extends TouchableOpacityProps {}

const Completed = ({ ...rest }: StatesOfSkillProps) => (
  <>
    <TouchableOpacity style={styles.buttonStates} {...rest}>
      <Text>✅</Text>
    </TouchableOpacity>
  </>
);

const Unfinished = ({ ...rest }: StatesOfSkillProps) => (
  <>
    <TouchableOpacity style={styles.buttonStates} {...rest}>
      <Text>❌</Text>
    </TouchableOpacity>
  </>
);

export { Completed, Unfinished };
