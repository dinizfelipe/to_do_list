import React, { useState, useMemo } from "react";
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

interface ITasks {
  id: number;
  isDone: boolean;
  content: string;
}

export function Home() {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [taskName, setTaskName] = useState("");

  const counts = useMemo(() => {
    const createds = tasks.length;
    const dones = tasks.filter((item) => item.isDone === true).length;
    return {
      createds,
      dones,
    };
  }, [tasks]);

  function handleAddTask() {
    if (taskName === "") {
      Alert.alert("Opa!", "Você você não pode cadastrar uma tarefa vazia.");
    } else {
      setTasks((oldstate) => [
        ...oldstate,
        {
          id: Math.floor(Math.random() * 1000),
          content: taskName,
          isDone: false,
        },
      ]);
      setTaskName("");
    }
  }

  function handleConfirmRemove(id: number) {
    setTasks((oldstate) => oldstate.filter((task) => task.id !== id));
  }

  function handleRemoveTask(task: ITasks) {
    Alert.alert(
      "Ooops!",
      `Você deseja deletar a seguinte task: "${task.content}" ?`,
      [
        {
          text: "Sim",
          onPress: () => handleConfirmRemove(task.id),
        },
        { text: "Não" },
      ]
    );
  }
  function handleChangeChecked(id: number) {
    const newList = tasks.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTasks(newList);
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
          <Text style={styles.textCountCreated}>
            Criadas: {counts.createds}
          </Text>
          <Text style={styles.textCountDone}>Concluídas: {counts.dones}</Text>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              taskName={item.content}
              checked={item.isDone}
              onChangeValue={() => handleChangeChecked(item.id)}
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
