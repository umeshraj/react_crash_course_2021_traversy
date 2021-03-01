import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doc work", day: "Feb 5th at 1:20pm", reminder: true },
    { id: 2, text: "School work", day: "Apr 1th at 4:20pm", reminder: true },
    { id: 3, text: "Food shopping", day: "Jan 1th at 3:10pm", reminder: true },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
