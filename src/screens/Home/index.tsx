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
  ScrollView,
} from "react-native";
import Task from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    setTasks((oldstate) => [...oldstate, taskName]);
    setTaskName("");
  }

  function handleRemoveTask(name: string) {
    // Alert.alert("OPA!", "Clicou em remover");
    setTasks((oldstate) => oldstate.filter((task) => task !== name));
  }
  function handleChangeChecked() {
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
          <Text style={styles.textCountCriadas}>Criadas: 0</Text>
          <Text style={styles.textCountConcluidas}>Concluídas: 0</Text>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              taskName={item}
              checked={isChecked}
              onChangeValue={handleChangeChecked}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.textNoTasks}>
              Poxa, você ainda não tem tarefas adicionadas. Não gostaria de
              adicionar?
            </Text>
          )}
        />

        {/* <Task
          taskName="Varrer a casa."
          onRemove={handleRemoveTask}
          checked={isChecked}
          onChangeValue={handleChangeChecked}
        />

        <Task
          taskName="Fazer feira no mercado as 20:00 na quarta-feira."
          onRemove={handleRemoveTask}
          checked={isChecked}
          onChangeValue={handleChangeChecked}
        />

        <Task
          taskName="Ir à academia as 9 da manhã no dia seguinte."
          onRemove={handleRemoveTask}
          checked={isChecked}
          onChangeValue={handleChangeChecked}
        /> */}
      </View>
    </>
  );
}
