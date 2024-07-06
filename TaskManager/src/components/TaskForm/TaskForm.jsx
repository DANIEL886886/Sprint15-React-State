import "./TaskForm.css"
import React from "react";

function TaskForm() {

    const handleNameChange = (event) => { 
        console.log(event.target.value)
    }

    const handleDateChange = (event) => {
        console.log(event.target.value);
    }

    const handleDetailsChange = (event) => {
        console.log(event.target.value);
    }

    return (
		<div>
			<form>
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
					<input
						onChange={handleDetailsChange}
						className="input-primary"
						type="text"
					/>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>

				<button type="submit">Create Task</button>
			</form>
		</div>
	);
}

export default TaskForm;