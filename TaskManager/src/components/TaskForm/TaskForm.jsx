import "./TaskForm.css"
import React, { useState } from "react";

function TaskForm(props) {
	const initialFormData = {
		status:"",
		dueDate: "",
		details: "",
	};

	const [formData, setFormData] = useState({
		status: "",
		dueDate: "",
		details: "",
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
		//initial state of "formData"
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
					<label>Task Status</label>
					<input
						value={formData.status}
						name="status"
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
						value={formData.details}
						name="details"
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