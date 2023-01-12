import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

import Icon from "@expo/vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";

type Props = {
  taskName: string;
  checked: boolean;
  onRemove: () => void;
  onChangeValue: () => void;
};

export default function Task({
  taskName,
  checked,
  onRemove,
  onChangeValue,
}: Props) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={{ margin: 10 }}
        color={checked ? "#5E60CE" : undefined}
        value={checked}
        onValueChange={onChangeValue}
      />
      {checked ? (
        <Text style={styles.taskDone}>{taskName}</Text>
      ) : (
        <Text style={styles.taskUndone}>{taskName}</Text>
      )}

      <TouchableOpacity onPress={onRemove} style={styles.button}>
        <Icon name="trash-o" color={"#fff"} size={30} />
      </TouchableOpacity>
    </View>
  );
}
