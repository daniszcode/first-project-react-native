import { styles } from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { SkillsCard } from "../Components/SkillsCard";
const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  function handleAddNewSkill() {
    setMySkill((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <TextInput
        style={styles.input}
        placeholder="Digits Aqua"
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.text, { fontSize: 25, marginVertical: 50 }]}>
        mySkill
      </Text>

      {mySkill.map((skill) => (
        <SkillsCard skill={skill} />
      ))}
    </View>
  );
};

export { Home };
