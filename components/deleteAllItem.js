import { StyleSheet, Pressable, Text } from "react-native";

function DeleteAllTasks(props) {
  return (
    <Pressable onPress={props.onDeleteAll}>
      <Text style={styles.clearBtn}>Clear All</Text>
    </Pressable>
  )
}

export default DeleteAllTasks;

const styles = StyleSheet.create({
  clearBtn: {
    color: "#fff",
  }
})
