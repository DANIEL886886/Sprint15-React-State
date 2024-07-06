import "./App.css";
import React from "react";
import { data } from "./components/AppData/Data";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
	return (
		<div className="app-container">
			<div className="app-content">
				{data.map((props, index) => (
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
					<TaskForm />
				</div>
			</div>
		</div>
	);
	
}

export default App;
