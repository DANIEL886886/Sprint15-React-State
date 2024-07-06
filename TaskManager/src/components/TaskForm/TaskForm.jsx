import "./TaskForm.css"
import React from "react";

function TaskForm() {
    return (
		<div>
			<form>
				<div className="form-row">
					<label>Task Name</label>
					<input type="text" />
				</div>

				<div className="form-row">
					<label>Due Date</label>
					<input type="date" />
				</div>

				<div className="form-row">
					<label>Task details</label>
                    <input type="text" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
				</div>

                <button type="submit">Create Task</button>
			</form>
		</div>
	);
}

export default TaskForm;