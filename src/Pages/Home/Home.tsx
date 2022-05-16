import { styles } from "./styles";
import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { SkillsCard } from "../Components/SkillsCard";
interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  // const [greeting, setGreeting] = useState("");
  const [counter, setCounter] = useState(0);

  // console.log("mySkill", mySkill, "newSkill", newSkill);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkill((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkill((skill) =>
      skill.filter((skillClicked) => skillClicked.id !== id)
    );
  }

  useEffect(() => {
    setCounter(mySkill.length);
  }, [mySkill]);

  // useEffect(() => {
  //   // const getOurs = new Date().getHours();
  //   // getOurs >= "00" && getOurs <= "11"
  //   //   ? setGreeting("Bom dia")
  //   //   : setGreeting("Boa tarde");
  // }, [greeting]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 25, marginVertical: 50 }]}>
        Quantidade de tarefas: {counter}
      </Text>
      <Text style={styles.text}>Academy TO-DO</Text>
      <TextInput
        style={styles.input}
        placeholder="Digits Aqua"
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />

      <Button title="Adicionar" onPress={handleAddNewSkill} />

      <FlatList
        data={mySkill}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillsCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name}
          />
        )}
      />
    </View>
  );
};

export { Home };
