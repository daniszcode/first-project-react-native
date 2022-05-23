import { styles } from "./styles";
import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { SkillsCard } from "../Components/SkillsCard";
import { Completed, Unfinished } from "../Components/StatesOfSkill";

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  // const [greeting, setGreeting] = useState("");
  const [counter, setCounter] = useState(0);
  const [skillComplet, setComplet] = useState("carioca");
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

  const markSkillCompleted = () => {
    mySkill.map((objeto) => {
      console.log("objeto", objeto.name);
      console.log("objeto trocado", (objeto.name = "Done ✅"));
      objeto.name = "Done ✅";
    });
  };

  useEffect(() => {
    if (markSkillCompleted) {
      markSkillCompleted();
    }
  }, []);

  console.log("myskill", mySkill);

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
        Number Of Tasks: {counter}
      </Text>
      <Text style={styles.text}>Academy TO-DO</Text>
      <TextInput
        style={styles.input}
        placeholder="Digits Aqua"
        placeholderTextColor={"#555"}
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill} />

      <FlatList
        data={mySkill}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <SkillsCard skill={item.name} />
            <Completed onPress={markSkillCompleted} />
            <Unfinished onPress={() => handleRemoveSkill(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export { Home };
