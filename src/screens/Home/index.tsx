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

  function handleAddTask() {}

  function handleRemoveTask() {
    Alert.alert("OPA!", "Clicou em remover");
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
          ></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Opaaa!",
                "Uma nova tarefa foi adicionado à sua lista."
              )
            }
          >
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>

        <Task
          taskName="Varrer a casa."
          onRemove={handleRemoveTask}
          checked={isChecked}
          onChangeValue={handleChangeChecked}
        />
        {/* <Task
          taskName="Varrer e limpar o quarto todo."
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
          taskName="Ir à academia as 9 da manhã."
          onRemove={handleRemoveTask}
          checked={isChecked}
          onChangeValue={handleChangeChecked}
        /> */}
      </View>
    </>
  );
}
