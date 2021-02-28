import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doc work", day: "Feb 5th at 1:20pm", reminder: true },
    { id: 2, text: "School work", day: "Apr 1th at 4:20pm", reminder: true },
    { id: 3, text: "Food shopping", day: "Jan 1th at 3:10pm", reminder: true },
  ]);

  return (
    <>
      {tasks.map((task) => {
        return <h3 key={task.id}>{task.text}</h3>;
      })}
    </>
  );
};

export default Tasks;
