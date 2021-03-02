import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doc work", day: "Feb 5th at 1:20pm", reminder: true },
    { id: 2, text: "School work", day: "Apr 1th at 4:20pm", reminder: true },
    { id: 3, text: "Food shopping", day: "Jan 1th at 3:10pm", reminder: true },
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
