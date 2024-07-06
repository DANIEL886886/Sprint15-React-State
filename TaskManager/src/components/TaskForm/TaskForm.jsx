import "./TaskForm.css"
import React, {useState} from "react";

function TaskForm() {

        const [taskName, setTaskName] = useState("");
        const [dueDate, setDueDate] = useState("");
        const [taskDetails, setTaskDetails] = useState("");

        const handleNameChange = (event) => { 
            setTaskName(event.target.value)
        }

        const handleDateChange = (event) => {
            setDueDate(event.target.value);
        }

        const handleDetailsChange = (event) => {
            setTaskDetails(event.target.value);
        }

        const handleSubmit = (event) => {
            event.preventDefault();

            // console.log("taskName = " + taskName);
            // console.log("dueDate = " + dueDate);
            // console.log("taskdetails = " + taskDetails);

            const newTask = {
                name: taskName,
                date: dueDate,
                taskDetails: taskDetails,
                status: "To do",
            };

            console.log("New Task is : " , newTask)
        }

    return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<label>Task Name</label>
					<input
						onChange={handleNameChange}
						className="input-primary"
						type="text"
					/>
				</div>

				<div className="form-row">
					<label>Due Date</label>
					<input
						onChange={handleDateChange}
						className="input-primary"
						type="date"
					/>
				</div>

				<div className="form-row">
					<label>Task details</label>
					<textarea
						onChange={handleDetailsChange}
						className="input-primary"
						type="text"
                        name=""
                        id=""
                        cols="3"
                        rows="10"
                    />                   
				</div>

				<button type="submit">Create Task</button>
			</form>
		</div>
	);
}

export default TaskForm;