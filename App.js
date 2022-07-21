import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar"

import TaskItem from "./components/TaskItem.js";
import TaskInput from "./components/TaskInput.js";
import DeleteAllTasks from "./components/deleteAllItem.js";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);

  function addTaskHandler(enteredTaskText) {
    if (!enteredTaskText.trim()) {
      Alert.alert("Task cannot be empty.");
    } else {
      setCourseGoal((currectCourseGoals) => [
        ...currectCourseGoals,
        { text: enteredTaskText, id: Math.random().toString() },
      ]);
    }
    endAddTaskHandler();
  }

  function startAddTaskHandler() {
    setModalIsVisable(true);
  }

  function endAddTaskHandler() {
    setModalIsVisable(false);
  }

  function deleteTaskHandler(id) {
    setCourseGoal((currectCourseGoals) => {
      return currectCourseGoals.filter((task) => task.id !== id);
    });
  }

  function deleteAllTask() {
    if (courseGoal.length != 0) {
      setCourseGoal((currectCourseGoals) => {
        Alert.alert("Task all done.");
        currectCourseGoals = [];
      });
    } else {
      Alert.alert("There is no task to clear.");
    }
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      {modalIsVisable && (
        <TaskInput onCancel={endAddTaskHandler} visable={modalIsVisable} onAddTask={addTaskHandler} />
      )}
      <Button title="Add Task" onPress={startAddTaskHandler} color="#a065ec"/>
      <DeleteAllTasks onDeleteAll={deleteAllTask} />
      <View style={styles.taskContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelItem={deleteTaskHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  taskContainer: {
    flex: 5,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
  },
});
