import "./TaskForm.css"
import React, { useState } from "react";

function TaskForm(props) {
	const initialFormData = {
		taskName: "",
		dueDate: "",
		taskDetails: "",
	};

	const [formData, setFormData] = useState({
		taskName: "",
		dueDate: "",
		taskDetails: "",
		status: "To do",
	});

	const handleInputChange = (event) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("FormData is : ", formData);
		setFormData({ ...initialFormData });

		// bond to create new task
		props.addNewTask(formData);
		// ............................
	};

	// const handleNameChange = (event) => {
	//     setFormData((prevState) => ({
	//         ...prevState,
	//         taskName: event.target.value
	//         })
	//     );
	// }

	// const handleDateChange = (event) => {
	//     setFormData((prevState) => ({
	// 		...prevState,
	// 		dueDate: event.target.value,
	//     }));
	// }

	// const handleDetailsChange = (event) => {
	//     setFormData((prevState) => ({
	//         ...prevState,
	//         taskDetails: event.target.value,
	//     }));
	// }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<label>Task Name</label>
					<input
						value={formData.taskName}
						name="taskName"
						onChange={handleInputChange}
						className="input-primary"
						type="text"
					/>
				</div>

				<div className="form-row">
					<label>Due Date</label>
					<input
						value={formData.dueDate}
						name="dueDate"
						onChange={handleInputChange}
						className="input-primary"
						type="date"
					/>
				</div>

				<div className="form-row">
					<label>Task details</label>
					<textarea
						value={formData.taskDetails}
						name="taskDetails"
						onChange={handleInputChange}
						className="input-primary"
						type="text"
						id=""
						cols="3"
						rows="10"
					/>
				</div>

				<div className="form-btn-wrapper">
					<button className="button-primary" type="submit">
						Create Task
					</button>
				</div>
			</form>
		</div>
	);
}

export default TaskForm;