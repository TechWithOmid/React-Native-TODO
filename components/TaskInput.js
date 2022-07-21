import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Modal,
  Image,
} from "react-native";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTask] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText);
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTask("");
  }

  return (
    <Modal visable={props.visable} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Write Down Your Task..."
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#311b6b",
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "90%",
    padding: 14,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    margin: 10,
  },
});
