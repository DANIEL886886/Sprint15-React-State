import "./App.css";
import React, {useState} from "react";
import { data } from "./components/AppData/Data";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {

    const [taskList, setTaskList] = useState(data);
	
	const addNewTask = (formData) => {
        console.log("task from APP.js: ", formData);

		// modification for "formdata" in order to
		// compli with the format from the "data" list of objects
        setTaskList((prevState) => [
            ...prevState,
            {
                ...formData,
                dueDate: new Date(formData.dueDate),
                id: "T-" + prevState.length + 1,
            },
        ]);
        console.log(setTaskList);
	};

	return (
		<div className="app-container">
			<div className="app-content">
				{taskList.map((props, index) => (
					<TaskCard
						key={index}
						id={props.id}
						status={props.status}
						name={props.name}
						dueDate={props.dueDate}
					/>
				))}
			</div>

			<div className="side-bar-right">
				<div className="side-bar-card">
					<h3>Create Task</h3>
					<TaskForm addNewTask={addNewTask}/>
				</div>
			</div>
		</div>
	);
	
}

export default App;
