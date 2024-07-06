import "./TaskCard.css";
import Badge from "../Badge/Badge";
import DateContainer from "../DateContainer/DateContainer";
import React, { useState } from "react";

function TaskCard(props) {

  const [taskId, setTaskId] = useState(props.id)

	const handleClick = () => { 
	setTaskId("Clicked !")
	console.log(taskId);
  }

  return (
    <div className="card-wrapper">
        <div className="card-header">
            <p className="task-id">{taskId}</p>
            <Badge status={props.status} />
        </div>

        <div className="card-content">
            <p>{props.name}</p>
        </div>

        <div className="card-footer">
            <button className="task-btn" onClick={handleClick}>
                Delete
            </button>
            <DateContainer date={props.dueDate} />
        </div>
    </div>
  );
}

export default TaskCard;
