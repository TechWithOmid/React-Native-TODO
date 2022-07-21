import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: "#fc0303" }}
        onPress={props.onDelItem.bind(this, props.id)}
      >
        <Text style={styles.taskText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  taskText: {
    color: "#fff",
    padding: 8,
  },
});
