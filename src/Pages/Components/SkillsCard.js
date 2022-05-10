import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../Home/styles";

const SkillsCard = ({ skill }) => (
  <TouchableOpacity key={skill} style={styles.buttonSkills}>
    <Text style={styles.textSkills}> {skill} </Text>
  </TouchableOpacity>
);

export { SkillsCard };
