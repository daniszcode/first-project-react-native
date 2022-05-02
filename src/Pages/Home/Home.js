import { styles } from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

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
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.p}> Additional </Text>
      </TouchableOpacity>
      <Text style={[styles.text, { fontSize: 25, marginVertical: 50 }]}>
        mySkill
      </Text>

      {mySkill.map((skills) => (
        <TouchableOpacity key={skills} style={styles.buttonSkills}>
          <Text style={styles.textSkills}> {skills} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export { Home };
