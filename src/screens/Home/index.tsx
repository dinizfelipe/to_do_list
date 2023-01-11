import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Task from "../../components/Task";
import Icon from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

export function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");
  const [countCreated, setCountCreated] = useState(0);
  const [countDone, setCountDone] = useState(0);

  function handleAddTask() {
    if (taskName === "") {
      Alert.alert("Opa!", "Você você não pode cadastrar uma tarefa vazia.");
    } else {
      setTasks((oldstate) => [...oldstate, taskName]);
      setTaskName("");
      setCountCreated(countCreated + 1);
    }
  }

  function handleConfirmRemove(name: string) {
    setTasks((oldstate) => oldstate.filter((task) => task !== name));
    setCountCreated(countCreated - 1);
  }

  function handleRemoveTask(name: string) {
    Alert.alert("Ooops!", `Você deseja deletar a seguinte task: "${name}" ?`, [
      {
        text: "Sim",
        onPress: () => handleConfirmRemove(name),
      },
      { text: "Não" },
    ]);
  }
  function handleChangeChecked(task: any) {
    setIsChecked(!isChecked);
  }
  return (
    <>
      <View style={styles.headerContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <View style={styles.logo}>
          <Image source={require("../../../assets/Logo.png")} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTaskName}
            value={taskName}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCounts}>
          <Text style={styles.textCountCreated}>Criadas: {countCreated}</Text>
          <Text style={styles.textCountDone}>Concluídas: {countDone}</Text>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              taskName={item}
              checked={isChecked}
              onChangeValue={() => handleChangeChecked(item)}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon name="clipboard-outline" size={70} color={"#808080"} />

              <Text style={styles.textNoTasks}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textNoTasks}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
