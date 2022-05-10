import { styles } from "./styles";
import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { SkillsCard } from "../Components/SkillsCard";
const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    setMySkill((oldState) => [...oldState, newSkill]);
  }

  useEffect(() => {
    const getOurs = new Date().getHours();

    getOurs >= "00" && getOurs <= "11"
      ? setGreeting("Bom dia")
      : setGreeting("Boa tarde");
  }, [greeting]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 25, marginVertical: 50 }]}>
        {greeting}
      </Text>
      <Text style={styles.text}>Hello World</Text>
      <TextInput
        style={styles.input}
        placeholder="Digits Aqua"
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <FlatList
        data={mySkill}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillsCard skill={item} />}
      />
    </View>
  );
};

export { Home };
