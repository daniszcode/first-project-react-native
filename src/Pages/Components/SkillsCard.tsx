import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "../Home/styles";

interface SkillCardsProps extends TouchableOpacityProps {
  skill: string;
}

const SkillsCard = ({ skill, ...rest }: SkillCardsProps) => (
  <TouchableOpacity style={styles.buttonSkills} {...rest}>
    <Text style={styles.textSkills}> {skill} </Text>
  </TouchableOpacity>
);

export { SkillsCard };
