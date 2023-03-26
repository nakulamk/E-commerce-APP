import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./Hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  function applyData(data) {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
  }
  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(
    { url: "https://react-http-f53c8-default-rtdb.firebaseio.com/tasks.json" },
    applyData
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
